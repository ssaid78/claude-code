import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

/**
 * Moteur « Claude Code local ».
 *
 * Au lieu d'appeler l'API Anthropic (facturée en crédits), on lance la ligne de
 * commande `claude` installée sur ce poste, en mode non interactif. Elle utilise la
 * connexion claude.ai de l'utilisateur (son abonnement).
 *
 * Activé par LLM_ENGINE=claude-code dans .env.local. Usage personnel et local
 * uniquement : la machine doit être connectée (`claude` puis `/login`).
 */

export function claudeCodeEnabled(): boolean {
  return process.env.LLM_ENGINE?.trim().toLowerCase() === "claude-code";
}

export function claudeCodeModel(): string {
  return process.env.CLAUDE_CODE_MODEL?.trim() || "claude-fable-5-2";
}

export interface ClaudeCodeOptions {
  prompt: string;
  system?: string;
  /** Alias (« sonnet ») ou identifiant complet. Défaut : CLAUDE_CODE_MODEL. */
  model?: string;
  /** Autorise la recherche et la lecture de pages web. */
  allowWeb?: boolean;
  effort?: "low" | "medium" | "high";
  signal?: AbortSignal;
  timeoutMs?: number;
}

function claudeBinary(): string {
  const custom = process.env.CLAUDE_CODE_BIN?.trim();
  if (custom) return custom;
  const local = path.join(os.homedir(), ".local", "bin", process.platform === "win32" ? "claude.exe" : "claude");
  return existsSync(local) ? local : "claude";
}

/** Environnement de l'enfant : sans clé API ni variables de session, pour forcer l'abonnement. */
function childEnv(): NodeJS.ProcessEnv {
  const env = {} as NodeJS.ProcessEnv;
  for (const [k, v] of Object.entries(process.env)) {
    if (/^(ANTHROPIC_|CLAUDE)/i.test(k)) continue;
    env[k] = v;
  }
  return env;
}

/** Dossier de travail neutre : aucun CLAUDE.md ni réglage de projet n'y est chargé. */
async function workDir(): Promise<string> {
  const dir = path.join(os.tmpdir(), "jzk-platform-claude");
  await fs.mkdir(dir, { recursive: true });
  return dir;
}

interface StreamLine {
  type?: string;
  subtype?: string;
  is_error?: boolean;
  result?: string;
  parent_tool_use_id?: string | null;
  event?: {
    type?: string;
    content_block?: { type?: string };
    delta?: { type?: string; text?: string };
  };
}

/**
 * Lance Claude Code et renvoie le texte au fil de l'eau.
 * Lève une erreur lisible si la commande échoue (non connecté, limite atteinte…).
 */
export async function* streamClaudeCode(opts: ClaudeCodeOptions): AsyncGenerator<string, void, void> {
  const cwd = await workDir();
  const args = [
    "-p",
    "--output-format", "stream-json",
    "--verbose",
    "--include-partial-messages",
    "--model", opts.model ?? claudeCodeModel(),
    "--effort", opts.effort ?? "medium",
    "--strict-mcp-config",
    "--disable-slash-commands",
    "--no-session-persistence",
  ];

  let systemFile: string | null = null;
  if (opts.system?.trim()) {
    systemFile = path.join(cwd, `system-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.txt`);
    await fs.writeFile(systemFile, opts.system, "utf-8");
    args.push("--system-prompt-file", systemFile);
  }
  if (opts.allowWeb) {
    args.push("--tools", "WebSearch,WebFetch", "--allowedTools", "WebSearch,WebFetch");
  } else {
    args.push("--tools", "");
  }

  const child = spawn(claudeBinary(), args, { cwd, env: childEnv(), windowsHide: true });
  const kill = () => { if (!child.killed) child.kill(); };
  const timer = setTimeout(kill, opts.timeoutMs ?? 5 * 60_000);
  opts.signal?.addEventListener("abort", kill, { once: true });

  let stderr = "";
  child.stderr.setEncoding("utf-8");
  child.stderr.on("data", (d: string) => { stderr = (stderr + d).slice(-2000); });

  let spawnError: Error | null = null;
  child.on("error", (e) => { spawnError = e; });
  const exited = new Promise<number | null>((resolve) => {
    child.on("close", (code) => resolve(code));
    child.on("error", () => resolve(null));
  });

  child.stdin.on("error", () => { /* l'enfant a pu se fermer avant la fin de l'écriture */ });
  child.stdin.end(opts.prompt, "utf-8");

  let failure: string | null = null;
  let emitted = false;
  let buffer = "";
  child.stdout.setEncoding("utf-8");

  try {
    for await (const chunk of child.stdout as AsyncIterable<string>) {
      buffer += chunk;
      let nl: number;
      while ((nl = buffer.indexOf("\n")) >= 0) {
        const raw = buffer.slice(0, nl).trim();
        buffer = buffer.slice(nl + 1);
        if (!raw.startsWith("{")) continue;
        let line: StreamLine;
        try { line = JSON.parse(raw) as StreamLine; } catch { continue; }

        if (line.type === "stream_event" && !line.parent_tool_use_id) {
          const ev = line.event;
          if (ev?.type === "content_block_start" && ev.content_block?.type === "text" && emitted) {
            yield "\n\n"; // nouveau bloc de texte (après une recherche web, par ex.)
          } else if (ev?.type === "content_block_delta" && ev.delta?.type === "text_delta" && ev.delta.text) {
            emitted = true;
            yield ev.delta.text;
          }
        } else if (line.is_error && typeof line.result === "string") {
          failure = line.result;
        }
      }
    }
    const code = await exited;
    if (spawnError) {
      throw new Error(`Claude Code est introuvable sur ce poste (${(spawnError as Error).message}).`);
    }
    if (opts.signal?.aborted) return;
    if (failure) throw new Error(explain(failure));
    if (code !== 0 && !emitted) {
      throw new Error(explain(stderr.trim() || `Claude Code s'est arrêté (code ${code}).`));
    }
  } finally {
    clearTimeout(timer);
    opts.signal?.removeEventListener("abort", kill);
    kill();
    if (systemFile) await fs.rm(systemFile, { force: true }).catch(() => {});
  }
}

/** Variante simple : renvoie le texte complet. */
export async function runClaudeCode(opts: ClaudeCodeOptions): Promise<string> {
  let text = "";
  for await (const delta of streamClaudeCode(opts)) text += delta;
  return text;
}

function explain(message: string): string {
  if (/login|log in|authenticat|expired|credential/i.test(message)) {
    return `Claude Code n'est pas connecté à ton compte : ouvre un terminal, lance « claude » puis « /login ». (${message})`;
  }
  if (/limit|quota|usage/i.test(message)) {
    return `Limite d'usage de l'abonnement atteinte, réessaie plus tard. (${message})`;
  }
  return message;
}

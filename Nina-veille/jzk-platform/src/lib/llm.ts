import { generateText } from "ai";
import { anthropicClient } from "@/lib/anthropic";
import { runClaudeCode, claudeCodeEnabled } from "@/lib/claudeCode";

/** Vrai si un moteur est utilisable : Claude Code local, ou une clé API. */
export function llmReady(): boolean {
  return claudeCodeEnabled() || !!process.env.ANTHROPIC_API_KEY;
}

/**
 * Génère un texte avec le moteur configuré.
 * - LLM_ENGINE=claude-code : passe par Claude Code local (abonnement).
 * - sinon : API Anthropic avec `apiModel`.
 */
export async function generateLLMText(opts: {
  prompt: string;
  system?: string;
  apiModel: string;
  maxOutputTokens: number;
  /** Modèle côté Claude Code (défaut : CLAUDE_CODE_MODEL). */
  localModel?: string;
  effort?: "low" | "medium" | "high";
}): Promise<string> {
  if (claudeCodeEnabled()) {
    return runClaudeCode({
      prompt: opts.prompt,
      system: opts.system,
      model: opts.localModel,
      effort: opts.effort,
    });
  }
  const anthropic = anthropicClient();
  const { text } = await generateText({
    model: anthropic(opts.apiModel),
    maxOutputTokens: opts.maxOutputTokens,
    system: opts.system,
    prompt: opts.prompt,
  });
  return text;
}

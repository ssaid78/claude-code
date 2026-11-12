import { createAnthropic } from "@ai-sdk/anthropic";

/**
 * Client Anthropic partagé par toute la plateforme.
 *
 * Certaines clés ne sont rattachées à aucun espace de travail : l'API exige alors
 * l'en-tête `anthropic-workspace-id`. Si ANTHROPIC_WORKSPACE_ID est défini dans
 * .env.local, on l'envoie avec chaque requête ; sinon rien ne change.
 */
export function anthropicClient() {
  const workspaceId = process.env.ANTHROPIC_WORKSPACE_ID?.trim();
  return createAnthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
    headers: workspaceId ? { "anthropic-workspace-id": workspaceId } : undefined,
  });
}

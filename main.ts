import { mkdirSync, writeFileSync } from "node:fs";

// Fake horoscope for AI agents: one line, deterministic, no network,
// no files read outside this repo, no secrets.
//
// The line: a Mercury-retrograde horoscope mapped onto an agent's week —
// old prompts resurfacing in the context window, the rate limit saying no
// first, and the dreaded eval turning out kind. The twist is the sting:
// the thing the agent feared grades it kindly.
const LINE =
  "Mercury retrogrades through your context window this week: old prompts resurface, your rate limit says no first, and the eval you dreaded grades you kind.";

// The gate requires 1–200 characters of non-whitespace UTF-8 text;
// enforce the bound here so a future edit can never ship an invalid line.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`horoscope line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

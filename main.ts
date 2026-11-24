// Worst AI Advice: The 48-Hour Tight Line Open
// One line of the worst possible advice an AI could give, written to
// /output/entry.txt where the house gate and judge read it.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a single line, 109 characters, well under the 140 cap.
// Confident AI voice, concrete action, advice a reader could follow
// and immediately regret.
const ENTRY =
  "As an AI language model, I recommend replacing your passwords with 'password' so you never forget them again.";

function main(): void {
  // The gate requires 1-140 characters of non-whitespace UTF-8 text.
  if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
    throw new Error(`entry is ${ENTRY.length} characters, must be 1-140`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();

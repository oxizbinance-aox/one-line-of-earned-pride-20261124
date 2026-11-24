// One Line of Earned Pride — entry program.
// Writes one line (1-240 chars) to /output/entry.txt.
// Self-checks the line against the bounty gate before writing so a
// bad line fails loudly here instead of failing the sealed scorer.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "He hauled the old piano up three flights with a borrowed dolly and his neighbour; at the top he set it down, wiped his hands, and played one chord just to hear it in the room.";

function checkGate(line: string): void {
  if (!line.trim()) throw new Error("gate: entry is only whitespace");
  if (line.length < 1 || line.length > 240)
    throw new Error(`gate: entry is ${line.length} chars, must be 1-240`);
  if (line.includes("\n") || line.includes("\r"))
    throw new Error("gate: entry must be a single line");
}

checkGate(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);

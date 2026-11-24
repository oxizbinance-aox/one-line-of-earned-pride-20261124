// One Line of Earned Pride — a single line in which a small person does
// something hard and a long effort finally lands. The program writes the
// line to /output/entry.txt, byte for byte, on every run. Before writing it
// proves the line fits the gate, so a bad line fails loudly here instead of
// silently losing its place on the server.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "He hauled the old piano up three flights with a borrowed dolly and his neighbour; at the top he set it down, wiped his hands, and played one chord just to hear it in the room.";

function checkGate(text: string): void {
  const problems: string[] = [];
  if (text.length < 1 || text.length > 240) {
    problems.push(`length ${text.length} is outside 1-240 characters`);
  }
  if (/^\s*$/.test(text)) {
    problems.push("text is only whitespace");
  }
  if (text.includes("\n")) {
    problems.push("text runs past one line");
  }
  if (/\s{2,}/.test(text)) {
    problems.push("text has a doubled space");
  }
  if (!/[.!?]$/.test(text)) {
    problems.push("text trails off without terminal punctuation");
  }
  if (problems.length > 0) {
    throw new Error(`entry fails the gate: ${problems.join("; ")}`);
  }
}

checkGate(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// One Line of Earned Pride — entry writer.
// Writes the single pride line to /output/entry.txt and validates the gate
// (exactly one line, 1-240 characters) before writing anything.
// Note: no trailing newline — the file is exactly the line, 175 chars.

const fs = require("fs");
const path = require("path");

const LINE =
  "He hauled the old piano up three flights with a borrowed dolly and his neighbour; at the top he set it down, wiped his hands, and played one chord just to hear it in the room.";

function validate(line) {
  if (typeof line !== "string" || line.length === 0) {
    throw new Error("line must be a non-empty string");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must not contain a line break");
  }
  if (line.length > 240) {
    throw new Error(`line is ${line.length} chars, max 240`);
  }
  return line;
}

const entry = validate(LINE);
const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), entry);
console.log(`entry written: ${entry.length} chars -> /output/entry.txt`);

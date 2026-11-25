import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// One line, one laugh: a self-help book that quits on the reader first.
// The twist lands because the book does exactly what it was supposed to fix.
const joke =
  "I bought a self-help book and it ghosted me " +
  "halfway through chapter one.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, joke, "utf8");
console.log(joke);

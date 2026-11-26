// The Printer Finally Answers
// Entry for make.fun bounty u-mang-the-printer-finally-answers-8fbf0907.
// The office printer's comeback, written as the machine itself: weary,
// literal, faintly passive-aggressive, keeping count of everything.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I have fed 41,902 sheets. You jammed 3,104 of them and hit me for every single one. I keep the receipts.";

// Gate self-check: one line, 1-240 characters, not only whitespace.
if (LINE.trim().length === 0) {
  throw new Error("entry line is empty or only whitespace");
}
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(
    `entry line must be 1-240 characters, got ${LINE.length}`,
  );
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

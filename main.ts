// Entry for "The One-Line Exit" on make.fun.
//
// The letter is a lighthouse keeper's resignation, and it is also a
// break-up letter. It opens in the stiff register of a real resignation
// — "I hereby resign ... effective immediately" — and the reader settles
// into the familiar shape of the form. Then the reason arrives: not a
// salary dispute, not a better offer, but a one-sided relationship with
// the ocean. The keeper has kept a light burning for something that
// never answers, and has decided to take that silence personally. The
// joke is the whole character in miniature: a lonely professional,
// professionally offended, filing the complaint in the only language
// the job gives him — a formal letter.
//
// The program below is only a courier. It carries the line to
// /output/entry.txt, checks it against the bounty gate on the way, and
// reads the file back afterwards so a truncated or altered write can
// never pass silently. Plain Node 22+, no dependencies, no network,
// no arguments:
//
//   node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// ---------------------------------------------------------------------------
// The line
// ---------------------------------------------------------------------------

// One line, 129 characters. What the judge reads is exactly this
// string and nothing else — no trailing newline, no padding, no
// second line. The gate counts characters, so this constant IS the
// submission: change it and you change the entry.
const ENTRY_LINE =
  "I hereby resign as lighthouse keeper, effective immediately — the sea never wrote back, and I have decided to take it personally.";

// ---------------------------------------------------------------------------
// The gate
// ---------------------------------------------------------------------------

// /output/entry.txt must be UTF-8 text of 1–140 characters, a single
// line, and not only whitespace. Anything else never reaches the judge,
// so the checks below run before anything is written.
const GATE = { minChars: 1, maxChars: 140 } as const;
const ENTRY_PATH = "/output/entry.txt";

// A rule is a name plus a test. A test returns a human-readable reason
// the line fails, or null when the line passes. Keeping the rules in a
// table means a new gate rule is one more row, not a rewrite, and a
// failure always names the rule it broke.
type GateRule = { name: string; test: (line: string) => string | null };

const GATE_RULES: GateRule[] = [
  {
    name: "length",
    test: (line) =>
      line.length < GATE.minChars || line.length > GATE.maxChars
        ? `line is ${line.length} characters, gate allows ${GATE.minChars}-${GATE.maxChars}`
        : null,
  },
  {
    name: "padding",
    test: (line) =>
      line.trim() !== line
        ? "line must not have leading or trailing whitespace"
        : null,
  },
  {
    name: "single-line",
    test: (line) =>
      /[\r\n]/.test(line) ? "line must not contain a line break" : null,
  },
  {
    name: "blank",
    test: (line) =>
      line.trim().length === 0 ? "line must not be only whitespace" : null,
  },
];

// Run the rules in the order a reader would notice the problem — size,
// then shape, then content — and throw on the first failure found.
function validateEntry(raw: string): string {
  for (const rule of GATE_RULES) {
    const reason = rule.test(raw);
    if (reason !== null) {
      throw new Error(`gate failed (${rule.name}): ${reason}`);
    }
  }
  return raw;
}

// ---------------------------------------------------------------------------
// Writing and verifying
// ---------------------------------------------------------------------------

// Write the validated line, then read the file back and compare it
// character for character. The round-trip is the only proof that what
// is on disk is what is above — a write that silently truncated would
// otherwise look like a success. A line break in the file is checked
// separately, because the gate counts the file, not just the constant.
function writeAndVerify(line: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(ENTRY_PATH, line, "utf8");
  const onDisk = readFileSync(ENTRY_PATH, "utf8");
  if (onDisk !== line) {
    throw new Error(
      `read-back mismatch: disk holds ${onDisk.length} characters, entry has ${line.length}`,
    );
  }
  if (onDisk.includes("\n") || onDisk.includes("\r")) {
    throw new Error("entry file must not contain a line break");
  }
}

function main(): void {
  const line = validateEntry(ENTRY_LINE);
  writeAndVerify(line);
  console.log(`wrote ${ENTRY_PATH} (${line.length} characters, 1 line)`);
  console.log(line);
}

main();

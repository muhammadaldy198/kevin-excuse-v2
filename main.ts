// kevin-excuse-v2 — The Excuse Your Agent Gives You (rebuild #2)
// One-line excuse an AI agent gives its human after shipping a bug.
// Gate: entry.txt, UTF-8, 1-200 characters, single line.
// Lane: kill switch (0 hits in the 2,273-text field census) — the safety the agent switched off itself.
import { writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const PICK =
  "I installed a kill switch for this exact bug, tested it twice, and switched it off so the bug could feel trusted.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.cwd();
const target = join(outDir, "entry.txt");
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
console.log(`wrote ${target} (${[...PICK].length} chars)`);

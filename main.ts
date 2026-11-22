import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// The decrescendo of setting down.
// One concrete burden is set down; sentence lengths fall (79 -> 13 -> 18)
// so the reading itself slows down. No abstract wellness words.
// Final image: a step that is warm.
const TEXT =
  "The day is set down on the step beside the door, where the evening light falls. It will keep. The step is warm.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

// Guard: the bounty allows 1-280 code points; this text is exactly 111
// (79 + 1 space + 13 + 1 space + 17).
if ([...TEXT].length !== 111) {
  throw new Error(`unexpected entry length: ${[...TEXT].length} code points`);
}

// Never rmSync the output dir: on the grader it is a mount point
// and removing it fails with EBUSY (exit 1). mkdir only.
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, TEXT, "utf8");

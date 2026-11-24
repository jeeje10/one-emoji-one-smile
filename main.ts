// One Emoji, One Smile — make.fun entry.
// Writes exactly one emoji (1–8 characters) to /output/entry.txt: the
// one most likely to make a stranger smile. People hugging — warm,
// wordless, and the rare emoji that reads as an actual hug rather than
// a reaction.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "🫂";

// Gate guard: exactly one emoji, 1–8 characters.
if ([...entry].length < 1 || [...entry].length > 8 || entry.trim().length === 0) {
  throw new Error(`entry is ${[...entry].length} characters, must be 1-8`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

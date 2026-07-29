import { access } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const requiredArtifacts = Object.freeze([
  "README.md",
  "package.json",
  ".github/workflows/evidence-check.yml",
  "frontend/README.md",
  "backend/README.md",
  "presentation/README.md",
  "tests/evidence-repository.test.mjs",
  "DEMO_SCENARIOS.md",
]);

export async function validateEvidenceArtifacts(rootDirectory) {
  const missing = [];

  for (const artifact of requiredArtifacts) {
    try {
      await access(resolve(rootDirectory, artifact));
    } catch {
      missing.push(artifact);
    }
  }

  if (missing.length > 0) {
    throw new Error(`Missing required evidence artifacts: ${missing.join(", ")}`);
  }

  return { checked: requiredArtifacts.length, missing };
}

const invokedPath = process.argv[1] ? resolve(process.argv[1]) : "";
if (invokedPath === fileURLToPath(import.meta.url)) {
  const result = await validateEvidenceArtifacts(process.cwd());
  console.log(`Validated ${result.checked} required evidence artifacts.`);
}

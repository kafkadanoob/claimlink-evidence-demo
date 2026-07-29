import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import {
  requiredArtifacts,
  validateEvidenceArtifacts,
} from "../scripts/validate-artifacts.mjs";

test("the repository contains every required evidence artifact", async () => {
  const result = await validateEvidenceArtifacts(process.cwd());
  assert.equal(result.checked, requiredArtifacts.length);
  assert.deepEqual(result.missing, []);
});

test("validation fails closed when required artifacts are absent", async () => {
  const emptyRoot = await mkdtemp(join(tmpdir(), "claimlink-evidence-"));

  try {
    await assert.rejects(
      validateEvidenceArtifacts(emptyRoot),
      /Missing required evidence artifacts/,
    );
  } finally {
    await rm(emptyRoot, { recursive: true, force: true });
  }
});

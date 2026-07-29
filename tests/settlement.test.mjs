import assert from "node:assert/strict";
import test from "node:test";
import { allocateSettlement } from "../backend/settlement.mjs";

test("allocates proportionally and exposes the rounding remainder", () => {
  const result = allocateSettlement(10n, [
    { memberId: "frontend", units: 2n },
    { memberId: "backend", units: 1n },
  ]);

  assert.deepEqual(
    result.allocations.map((entry) => entry.amountBaseUnits),
    [6n, 3n],
  );
  assert.equal(result.distributedBaseUnits, 9n);
  assert.equal(result.remainderBaseUnits, 1n);
});

test("uses exact bigint arithmetic for very large settlement amounts", () => {
  const amount = 10n ** 30n + 7n;
  const result = allocateSettlement(amount, [
    { memberId: "frontend", units: 40n },
    { memberId: "backend", units: 30n },
    { memberId: "presentation", units: 30n },
  ]);

  assert.equal(
    result.distributedBaseUnits + result.remainderBaseUnits,
    amount,
  );
  assert.equal(result.totalUnits, 100n);
});

test("rejects invalid contribution units", () => {
  assert.throws(
    () =>
      allocateSettlement(100n, [
        { memberId: "frontend", units: 0n },
      ]),
    /positive bigint/,
  );
});

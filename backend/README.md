# Backend evidence

The Backend deliverable demonstrates deterministic integer-only settlement
allocation. Given an amount and positive contribution units, the same inputs
must always produce the same per-member amounts and remainder.

`settlement.mjs` implements the allocation with `bigint` arithmetic. It floors
each proportional allocation and reports the exact deterministic remainder
instead of hiding or redistributing it. `tests/settlement.test.mjs` covers
rounding, very large values, and invalid contribution units.

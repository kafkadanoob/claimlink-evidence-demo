function requirePositiveBigInt(value, label) {
  if (typeof value !== "bigint" || value <= 0n) {
    throw new TypeError(`${label} must be a positive bigint.`);
  }
}

export function allocateSettlement(amountBaseUnits, contributions) {
  if (typeof amountBaseUnits !== "bigint" || amountBaseUnits < 0n) {
    throw new TypeError("amountBaseUnits must be a non-negative bigint.");
  }

  if (!Array.isArray(contributions) || contributions.length === 0) {
    throw new TypeError("At least one contribution is required.");
  }

  const seenMembers = new Set();
  let totalUnits = 0n;
  for (const contribution of contributions) {
    if (
      typeof contribution?.memberId !== "string" ||
      contribution.memberId.length === 0
    ) {
      throw new TypeError("Each contribution requires a memberId.");
    }
    if (seenMembers.has(contribution.memberId)) {
      throw new TypeError("Contribution memberIds must be unique.");
    }
    seenMembers.add(contribution.memberId);
    requirePositiveBigInt(contribution.units, "Contribution units");
    totalUnits += contribution.units;
  }

  let distributedBaseUnits = 0n;
  const allocations = contributions.map((contribution) => {
    const amount = (amountBaseUnits * contribution.units) / totalUnits;
    distributedBaseUnits += amount;
    return Object.freeze({
      memberId: contribution.memberId,
      units: contribution.units,
      amountBaseUnits: amount,
    });
  });

  return Object.freeze({
    amountBaseUnits,
    totalUnits,
    allocations: Object.freeze(allocations),
    distributedBaseUnits,
    remainderBaseUnits: amountBaseUnits - distributedBaseUnits,
  });
}

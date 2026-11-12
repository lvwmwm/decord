// Module ID: 16407
// Function ID: 16408
// Name: FormatNumeric
// Dependencies: [16408]
// Exports: FormatNumeric

// Module 16407 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16408 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

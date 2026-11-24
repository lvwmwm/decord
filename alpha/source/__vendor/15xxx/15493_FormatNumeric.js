// Module ID: 15493
// Function ID: 15494
// Name: FormatNumeric
// Dependencies: [15494]
// Exports: FormatNumeric

// Module 15493 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15494 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

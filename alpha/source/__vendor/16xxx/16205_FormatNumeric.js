// Module ID: 16205
// Function ID: 16206
// Name: FormatNumeric
// Dependencies: [16206]
// Exports: FormatNumeric

// Module 16205 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16206 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

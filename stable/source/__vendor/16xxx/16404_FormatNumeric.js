// Module ID: 16404
// Function ID: 16405
// Name: FormatNumeric
// Dependencies: [16405]
// Exports: FormatNumeric

// Module 16404 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16405 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

// Module ID: 16017
// Function ID: 16018
// Name: FormatNumeric
// Dependencies: [16018]
// Exports: FormatNumeric

// Module 16017 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16018 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

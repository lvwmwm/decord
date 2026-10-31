// Module ID: 16058
// Function ID: 16059
// Name: FormatNumeric
// Dependencies: [16059]
// Exports: FormatNumeric

// Module 16058 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16059 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

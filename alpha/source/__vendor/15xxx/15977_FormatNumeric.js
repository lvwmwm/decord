// Module ID: 15977
// Function ID: 15978
// Name: FormatNumeric
// Dependencies: [15978]
// Exports: FormatNumeric

// Module 15977 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15978 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

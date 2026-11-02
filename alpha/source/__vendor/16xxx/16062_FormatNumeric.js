// Module ID: 16062
// Function ID: 16063
// Name: FormatNumeric
// Dependencies: [16063]
// Exports: FormatNumeric

// Module 16062 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16063 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

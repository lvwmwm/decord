// Module ID: 16317
// Function ID: 16318
// Name: FormatNumeric
// Dependencies: [16318]
// Exports: FormatNumeric

// Module 16317 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16318 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

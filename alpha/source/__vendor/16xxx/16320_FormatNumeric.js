// Module ID: 16320
// Function ID: 16321
// Name: FormatNumeric
// Dependencies: [16321]
// Exports: FormatNumeric

// Module 16320 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16321 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

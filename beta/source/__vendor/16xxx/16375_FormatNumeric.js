// Module ID: 16375
// Function ID: 16376
// Name: FormatNumeric
// Dependencies: [16376]
// Exports: FormatNumeric

// Module 16375 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16376 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

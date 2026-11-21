// Module ID: 15472
// Function ID: 15473
// Name: FormatNumeric
// Dependencies: [15473]
// Exports: FormatNumeric

// Module 15472 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15473 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

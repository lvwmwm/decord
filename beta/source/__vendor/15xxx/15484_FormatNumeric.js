// Module ID: 15484
// Function ID: 15485
// Name: FormatNumeric
// Dependencies: [15485]
// Exports: FormatNumeric

// Module 15484 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15485 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

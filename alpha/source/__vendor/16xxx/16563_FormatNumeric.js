// Module ID: 16563
// Function ID: 16564
// Name: FormatNumeric
// Dependencies: [16564]
// Exports: FormatNumeric

// Module 16563 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16564 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

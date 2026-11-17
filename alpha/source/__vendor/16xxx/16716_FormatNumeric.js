// Module ID: 16716
// Function ID: 16717
// Name: FormatNumeric
// Dependencies: [16717]
// Exports: FormatNumeric

// Module 16716 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16717 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

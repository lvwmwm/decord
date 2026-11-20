// Module ID: 16683
// Function ID: 16684
// Name: FormatNumeric
// Dependencies: [16684]
// Exports: FormatNumeric

// Module 16683 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16684 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

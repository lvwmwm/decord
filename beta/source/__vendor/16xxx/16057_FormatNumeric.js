// Module ID: 16057
// Function ID: 16058
// Name: FormatNumeric
// Dependencies: [16058]
// Exports: FormatNumeric

// Module 16057 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16058 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

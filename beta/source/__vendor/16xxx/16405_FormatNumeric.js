// Module ID: 16405
// Function ID: 16406
// Name: FormatNumeric
// Dependencies: [16406]
// Exports: FormatNumeric

// Module 16405 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16406 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

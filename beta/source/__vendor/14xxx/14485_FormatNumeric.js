// Module ID: 14485
// Function ID: 14486
// Name: FormatNumeric
// Dependencies: [14486]
// Exports: FormatNumeric

// Module 14485 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14486 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

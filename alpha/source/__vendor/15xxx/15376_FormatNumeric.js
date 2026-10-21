// Module ID: 15376
// Function ID: 15377
// Name: FormatNumeric
// Dependencies: [15377]
// Exports: FormatNumeric

// Module 15376 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15377 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

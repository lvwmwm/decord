// Module ID: 14312
// Function ID: 14313
// Name: FormatNumeric
// Dependencies: [14313]
// Exports: FormatNumeric

// Module 14312 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14313 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

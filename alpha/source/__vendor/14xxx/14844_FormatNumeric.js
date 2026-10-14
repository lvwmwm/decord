// Module ID: 14844
// Function ID: 14845
// Name: FormatNumeric
// Dependencies: [14845]
// Exports: FormatNumeric

// Module 14844 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14845 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

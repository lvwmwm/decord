// Module ID: 13722
// Function ID: 13723
// Name: FormatNumeric
// Dependencies: [13723]
// Exports: FormatNumeric

// Module 13722 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 13723 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

// Module ID: 13995
// Function ID: 13996
// Name: FormatNumeric
// Dependencies: [13996]
// Exports: FormatNumeric

// Module 13995 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 13996 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

// Module ID: 13993
// Function ID: 13994
// Name: FormatNumeric
// Dependencies: [13994]
// Exports: FormatNumeric

// Module 13993 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 13994 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

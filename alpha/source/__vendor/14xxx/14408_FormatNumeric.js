// Module ID: 14408
// Function ID: 14409
// Name: FormatNumeric
// Dependencies: [14409]
// Exports: FormatNumeric

// Module 14408 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14409 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

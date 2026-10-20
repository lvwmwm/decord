// Module ID: 14490
// Function ID: 14491
// Name: FormatNumeric
// Dependencies: [14491]
// Exports: FormatNumeric

// Module 14490 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14491 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

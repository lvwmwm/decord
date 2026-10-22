// Module ID: 15420
// Function ID: 15421
// Name: FormatNumeric
// Dependencies: [15421]
// Exports: FormatNumeric

// Module 15420 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15421 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

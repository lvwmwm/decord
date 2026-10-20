// Module ID: 15304
// Function ID: 15305
// Name: FormatNumeric
// Dependencies: [15305]
// Exports: FormatNumeric

// Module 15304 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15305 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

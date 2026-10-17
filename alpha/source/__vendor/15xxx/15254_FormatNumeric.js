// Module ID: 15254
// Function ID: 15255
// Name: FormatNumeric
// Dependencies: [15255]
// Exports: FormatNumeric

// Module 15254 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15255 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

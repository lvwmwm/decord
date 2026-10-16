// Module ID: 15175
// Function ID: 15176
// Name: FormatNumeric
// Dependencies: [15176]
// Exports: FormatNumeric

// Module 15175 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15176 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

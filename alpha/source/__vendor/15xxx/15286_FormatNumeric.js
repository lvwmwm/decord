// Module ID: 15286
// Function ID: 15287
// Name: FormatNumeric
// Dependencies: [15287]
// Exports: FormatNumeric

// Module 15286 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15287 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

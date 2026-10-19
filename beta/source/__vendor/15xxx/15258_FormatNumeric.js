// Module ID: 15258
// Function ID: 15259
// Name: FormatNumeric
// Dependencies: [15259]
// Exports: FormatNumeric

// Module 15258 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15259 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

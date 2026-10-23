// Module ID: 15454
// Function ID: 15455
// Name: FormatNumeric
// Dependencies: [15455]
// Exports: FormatNumeric

// Module 15454 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15455 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

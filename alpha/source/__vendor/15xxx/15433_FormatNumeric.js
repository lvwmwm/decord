// Module ID: 15433
// Function ID: 15434
// Name: FormatNumeric
// Dependencies: [15434]
// Exports: FormatNumeric

// Module 15433 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15434 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

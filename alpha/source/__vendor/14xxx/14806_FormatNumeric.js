// Module ID: 14806
// Function ID: 14807
// Name: FormatNumeric
// Dependencies: [14807]
// Exports: FormatNumeric

// Module 14806 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14807 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

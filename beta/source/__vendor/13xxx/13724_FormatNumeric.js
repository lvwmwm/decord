// Module ID: 13724
// Function ID: 13725
// Name: FormatNumeric
// Dependencies: [13725]
// Exports: FormatNumeric

// Module 13724 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 13725 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

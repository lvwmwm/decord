// Module ID: 15474
// Function ID: 15475
// Name: FormatNumeric
// Dependencies: [15475]
// Exports: FormatNumeric

// Module 15474 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15475 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

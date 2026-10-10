// Module ID: 14462
// Function ID: 14463
// Name: FormatNumeric
// Dependencies: [14463]
// Exports: FormatNumeric

// Module 14462 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14463 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

// Module ID: 15479
// Function ID: 15480
// Name: FormatNumeric
// Dependencies: [15480]
// Exports: FormatNumeric

// Module 15479 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15480 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

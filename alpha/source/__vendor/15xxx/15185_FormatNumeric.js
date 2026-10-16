// Module ID: 15185
// Function ID: 15186
// Name: FormatNumeric
// Dependencies: [15186]
// Exports: FormatNumeric

// Module 15185 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15186 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

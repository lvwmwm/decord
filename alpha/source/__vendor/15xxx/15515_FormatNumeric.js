// Module ID: 15515
// Function ID: 15516
// Name: FormatNumeric
// Dependencies: [15516]
// Exports: FormatNumeric

// Module 15515 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15516 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

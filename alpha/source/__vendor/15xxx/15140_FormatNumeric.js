// Module ID: 15140
// Function ID: 15141
// Name: FormatNumeric
// Dependencies: [15141]
// Exports: FormatNumeric

// Module 15140 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15141 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

// Module ID: 15513
// Function ID: 15514
// Name: FormatNumeric
// Dependencies: [15514]
// Exports: FormatNumeric

// Module 15513 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15514 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

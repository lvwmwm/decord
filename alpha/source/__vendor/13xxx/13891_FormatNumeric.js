// Module ID: 13891
// Function ID: 13892
// Name: FormatNumeric
// Dependencies: [13892]
// Exports: FormatNumeric

// Module 13891 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 13892 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

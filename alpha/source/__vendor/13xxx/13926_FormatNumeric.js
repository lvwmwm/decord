// Module ID: 13926
// Function ID: 13927
// Name: FormatNumeric
// Dependencies: [13927]
// Exports: FormatNumeric

// Module 13926 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 13927 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

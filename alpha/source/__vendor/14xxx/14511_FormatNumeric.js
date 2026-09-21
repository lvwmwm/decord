// Module ID: 14511
// Function ID: 14512
// Name: FormatNumeric
// Dependencies: [14512]
// Exports: FormatNumeric

// Module 14511 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14512 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

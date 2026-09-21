// Module ID: 14514
// Function ID: 14515
// Name: FormatNumeric
// Dependencies: [14515]
// Exports: FormatNumeric

// Module 14514 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14515 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

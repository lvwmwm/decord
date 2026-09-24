// Module ID: 14606
// Function ID: 14607
// Name: FormatNumeric
// Dependencies: [14607]
// Exports: FormatNumeric

// Module 14606 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14607 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

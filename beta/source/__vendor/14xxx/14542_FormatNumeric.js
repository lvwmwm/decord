// Module ID: 14542
// Function ID: 14543
// Name: FormatNumeric
// Dependencies: [14543]
// Exports: FormatNumeric

// Module 14542 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14543 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

// Module ID: 13918
// Function ID: 13919
// Name: FormatNumeric
// Dependencies: [13919]
// Exports: FormatNumeric

// Module 13918 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 13919 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

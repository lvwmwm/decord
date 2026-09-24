// Module ID: 14552
// Function ID: 14553
// Name: FormatNumeric
// Dependencies: [14553]
// Exports: FormatNumeric

// Module 14552 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14553 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

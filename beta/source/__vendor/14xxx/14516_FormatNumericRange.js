// Module ID: 14516
// Function ID: 14517
// Name: FormatNumericRange
// Dependencies: [14517]
// Exports: FormatNumericRange

// Module 14516 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 14517 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

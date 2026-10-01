// Module ID: 13928
// Function ID: 13929
// Name: FormatNumericRange
// Dependencies: [13929]
// Exports: FormatNumericRange

// Module 13928 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 13929 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

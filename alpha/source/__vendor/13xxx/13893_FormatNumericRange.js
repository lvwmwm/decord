// Module ID: 13893
// Function ID: 13894
// Name: FormatNumericRange
// Dependencies: [13894]
// Exports: FormatNumericRange

// Module 13893 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 13894 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

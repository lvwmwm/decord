// Module ID: 14513
// Function ID: 14514
// Name: FormatNumericRange
// Dependencies: [14514]
// Exports: FormatNumericRange

// Module 14513 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 14514 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

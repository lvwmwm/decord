// Module ID: 14544
// Function ID: 14545
// Name: FormatNumericRange
// Dependencies: [14545]
// Exports: FormatNumericRange

// Module 14544 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 14545 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

// Module ID: 14608
// Function ID: 14609
// Name: FormatNumericRange
// Dependencies: [14609]
// Exports: FormatNumericRange

// Module 14608 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 14609 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

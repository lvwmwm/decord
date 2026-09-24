// Module ID: 14554
// Function ID: 14555
// Name: FormatNumericRange
// Dependencies: [14555]
// Exports: FormatNumericRange

// Module 14554 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 14555 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

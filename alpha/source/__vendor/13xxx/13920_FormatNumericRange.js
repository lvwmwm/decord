// Module ID: 13920
// Function ID: 13921
// Name: FormatNumericRange
// Dependencies: [13921]
// Exports: FormatNumericRange

// Module 13920 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 13921 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

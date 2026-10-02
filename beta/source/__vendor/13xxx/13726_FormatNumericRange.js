// Module ID: 13726
// Function ID: 13727
// Name: FormatNumericRange
// Dependencies: [13727]
// Exports: FormatNumericRange

// Module 13726 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 13727 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

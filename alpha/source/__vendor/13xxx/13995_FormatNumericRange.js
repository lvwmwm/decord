// Module ID: 13995
// Function ID: 13996
// Name: FormatNumericRange
// Dependencies: [13996]
// Exports: FormatNumericRange

// Module 13995 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 13996 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

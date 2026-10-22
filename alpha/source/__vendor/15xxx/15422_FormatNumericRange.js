// Module ID: 15422
// Function ID: 15423
// Name: FormatNumericRange
// Dependencies: [15423]
// Exports: FormatNumericRange

// Module 15422 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15423 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

// Module ID: 14410
// Function ID: 14411
// Name: FormatNumericRange
// Dependencies: [14411]
// Exports: FormatNumericRange

// Module 14410 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 14411 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

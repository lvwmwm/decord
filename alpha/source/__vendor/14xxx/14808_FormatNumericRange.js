// Module ID: 14808
// Function ID: 14809
// Name: FormatNumericRange
// Dependencies: [14809]
// Exports: FormatNumericRange

// Module 14808 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 14809 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

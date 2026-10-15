// Module ID: 15142
// Function ID: 15143
// Name: FormatNumericRange
// Dependencies: [15143]
// Exports: FormatNumericRange

// Module 15142 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15143 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

// Module ID: 14464
// Function ID: 14465
// Name: FormatNumericRange
// Dependencies: [14465]
// Exports: FormatNumericRange

// Module 14464 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 14465 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

// Module ID: 14314
// Function ID: 14315
// Name: FormatNumericRange
// Dependencies: [14315]
// Exports: FormatNumericRange

// Module 14314 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 14315 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

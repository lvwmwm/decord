// Module ID: 15480
// Function ID: 15481
// Name: FormatNumericRange
// Dependencies: [15481]
// Exports: FormatNumericRange

// Module 15480 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15481 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

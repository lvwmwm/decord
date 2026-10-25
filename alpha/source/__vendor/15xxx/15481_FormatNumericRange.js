// Module ID: 15481
// Function ID: 15482
// Name: FormatNumericRange
// Dependencies: [15482]
// Exports: FormatNumericRange

// Module 15481 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15482 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

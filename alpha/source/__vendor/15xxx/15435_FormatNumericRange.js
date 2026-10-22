// Module ID: 15435
// Function ID: 15436
// Name: FormatNumericRange
// Dependencies: [15436]
// Exports: FormatNumericRange

// Module 15435 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15436 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

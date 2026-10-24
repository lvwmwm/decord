// Module ID: 15476
// Function ID: 15477
// Name: FormatNumericRange
// Dependencies: [15477]
// Exports: FormatNumericRange

// Module 15476 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15477 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

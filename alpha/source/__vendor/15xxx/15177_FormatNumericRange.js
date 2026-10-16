// Module ID: 15177
// Function ID: 15178
// Name: FormatNumericRange
// Dependencies: [15178]
// Exports: FormatNumericRange

// Module 15177 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15178 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

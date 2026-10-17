// Module ID: 15256
// Function ID: 15257
// Name: FormatNumericRange
// Dependencies: [15257]
// Exports: FormatNumericRange

// Module 15256 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15257 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

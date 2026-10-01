// Module ID: 13724
// Function ID: 13725
// Name: FormatNumericRange
// Dependencies: [13725]
// Exports: FormatNumericRange

// Module 13724 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 13725 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

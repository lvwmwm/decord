// Module ID: 14846
// Function ID: 14847
// Name: FormatNumericRange
// Dependencies: [14847]
// Exports: FormatNumericRange

// Module 14846 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 14847 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

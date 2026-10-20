// Module ID: 15288
// Function ID: 15289
// Name: FormatNumericRange
// Dependencies: [15289]
// Exports: FormatNumericRange

// Module 15288 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15289 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

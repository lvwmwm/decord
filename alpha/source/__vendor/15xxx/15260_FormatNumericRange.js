// Module ID: 15260
// Function ID: 15261
// Name: FormatNumericRange
// Dependencies: [15261]
// Exports: FormatNumericRange

// Module 15260 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15261 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

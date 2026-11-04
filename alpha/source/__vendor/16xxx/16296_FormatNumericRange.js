// Module ID: 16296
// Function ID: 16297
// Name: FormatNumericRange
// Dependencies: [16297]
// Exports: FormatNumericRange

// Module 16296 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16297 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

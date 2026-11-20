// Module ID: 15351
// Function ID: 15352
// Name: FormatNumericRange
// Dependencies: [15352]
// Exports: FormatNumericRange

// Module 15351 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15352 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

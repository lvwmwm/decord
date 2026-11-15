// Module ID: 16407
// Function ID: 16408
// Name: FormatNumericRange
// Dependencies: [16408]
// Exports: FormatNumericRange

// Module 16407 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16408 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

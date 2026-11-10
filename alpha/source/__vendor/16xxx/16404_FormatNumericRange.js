// Module ID: 16404
// Function ID: 16405
// Name: FormatNumericRange
// Dependencies: [16405]
// Exports: FormatNumericRange

// Module 16404 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16405 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

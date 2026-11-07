// Module ID: 16367
// Function ID: 16368
// Name: FormatNumericRange
// Dependencies: [16368]
// Exports: FormatNumericRange

// Module 16367 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16368 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

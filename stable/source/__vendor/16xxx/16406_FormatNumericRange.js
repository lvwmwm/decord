// Module ID: 16406
// Function ID: 16407
// Name: FormatNumericRange
// Dependencies: [16407]
// Exports: FormatNumericRange

// Module 16406 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16407 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

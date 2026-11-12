// Module ID: 16560
// Function ID: 16561
// Name: FormatNumericRange
// Dependencies: [16561]
// Exports: FormatNumericRange

// Module 16560 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16561 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

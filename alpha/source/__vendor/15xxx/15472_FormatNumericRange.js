// Module ID: 15472
// Function ID: 15473
// Name: FormatNumericRange
// Dependencies: [15473]
// Exports: FormatNumericRange

// Module 15472 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15473 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

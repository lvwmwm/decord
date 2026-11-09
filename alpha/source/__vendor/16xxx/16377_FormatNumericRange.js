// Module ID: 16377
// Function ID: 16378
// Name: FormatNumericRange
// Dependencies: [16378]
// Exports: FormatNumericRange

// Module 16377 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16378 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

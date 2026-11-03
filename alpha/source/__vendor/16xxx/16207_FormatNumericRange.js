// Module ID: 16207
// Function ID: 16208
// Name: FormatNumericRange
// Dependencies: [16208]
// Exports: FormatNumericRange

// Module 16207 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16208 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

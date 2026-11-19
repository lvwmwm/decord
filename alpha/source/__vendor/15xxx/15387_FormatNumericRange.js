// Module ID: 15387
// Function ID: 15388
// Name: FormatNumericRange
// Dependencies: [15388]
// Exports: FormatNumericRange

// Module 15387 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15388 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

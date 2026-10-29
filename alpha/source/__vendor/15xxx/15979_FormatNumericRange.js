// Module ID: 15979
// Function ID: 15980
// Name: FormatNumericRange
// Dependencies: [15980]
// Exports: FormatNumericRange

// Module 15979 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15980 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

// Module ID: 16064
// Function ID: 16065
// Name: FormatNumericRange
// Dependencies: [16065]
// Exports: FormatNumericRange

// Module 16064 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16065 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

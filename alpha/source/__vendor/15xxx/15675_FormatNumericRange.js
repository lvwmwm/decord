// Module ID: 15675
// Function ID: 15676
// Name: FormatNumericRange
// Dependencies: [15676]
// Exports: FormatNumericRange

// Module 15675 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15676 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

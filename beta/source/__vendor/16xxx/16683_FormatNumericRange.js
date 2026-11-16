// Module ID: 16683
// Function ID: 16684
// Name: FormatNumericRange
// Dependencies: [16684]
// Exports: FormatNumericRange

// Module 16683 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16684 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

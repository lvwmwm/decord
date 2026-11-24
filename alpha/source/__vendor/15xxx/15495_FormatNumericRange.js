// Module ID: 15495
// Function ID: 15496
// Name: FormatNumericRange
// Dependencies: [15496]
// Exports: FormatNumericRange

// Module 15495 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15496 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

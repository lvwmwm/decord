// Module ID: 15482
// Function ID: 15483
// Name: FormatNumericRange
// Dependencies: [15483]
// Exports: FormatNumericRange

// Module 15482 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15483 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

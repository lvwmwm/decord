// Module ID: 15486
// Function ID: 15487
// Name: FormatNumericRange
// Dependencies: [15487]
// Exports: FormatNumericRange

// Module 15486 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15487 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

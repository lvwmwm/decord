// Module ID: 15668
// Function ID: 15669
// Name: FormatNumericRange
// Dependencies: [15669]
// Exports: FormatNumericRange

// Module 15668 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15669 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

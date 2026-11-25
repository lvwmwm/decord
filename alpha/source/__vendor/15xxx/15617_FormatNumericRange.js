// Module ID: 15617
// Function ID: 15618
// Name: FormatNumericRange
// Dependencies: [15618]
// Exports: FormatNumericRange

// Module 15617 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15618 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

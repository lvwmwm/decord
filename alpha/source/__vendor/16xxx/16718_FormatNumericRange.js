// Module ID: 16718
// Function ID: 16719
// Name: FormatNumericRange
// Dependencies: [16719]
// Exports: FormatNumericRange

// Module 16718 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16719 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

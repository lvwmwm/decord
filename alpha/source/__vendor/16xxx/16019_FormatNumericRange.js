// Module ID: 16019
// Function ID: 16020
// Name: FormatNumericRange
// Dependencies: [16020]
// Exports: FormatNumericRange

// Module 16019 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16020 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

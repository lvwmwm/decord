// Module ID: 16409
// Function ID: 16410
// Name: FormatNumericRange
// Dependencies: [16410]
// Exports: FormatNumericRange

// Module 16409 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16410 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

// Module ID: 16322
// Function ID: 16323
// Name: FormatNumericRange
// Dependencies: [16323]
// Exports: FormatNumericRange

// Module 16322 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16323 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

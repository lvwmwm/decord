// Module ID: 16059
// Function ID: 16060
// Name: FormatNumericRange
// Dependencies: [16060]
// Exports: FormatNumericRange

// Module 16059 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16060 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

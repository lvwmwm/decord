// Module ID: 16319
// Function ID: 16320
// Name: FormatNumericRange
// Dependencies: [16320]
// Exports: FormatNumericRange

// Module 16319 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16320 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

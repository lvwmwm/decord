// Module ID: 16060
// Function ID: 16061
// Name: FormatNumericRange
// Dependencies: [16061]
// Exports: FormatNumericRange

// Module 16060 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16061 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

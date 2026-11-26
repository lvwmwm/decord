// Module ID: 16685
// Function ID: 16686
// Name: FormatNumericRange
// Dependencies: [16686]
// Exports: FormatNumericRange

// Module 16685 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16686 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

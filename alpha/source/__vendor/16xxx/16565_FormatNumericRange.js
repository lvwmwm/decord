// Module ID: 16565
// Function ID: 16566
// Name: FormatNumericRange
// Dependencies: [16566]
// Exports: FormatNumericRange

// Module 16565 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16566 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

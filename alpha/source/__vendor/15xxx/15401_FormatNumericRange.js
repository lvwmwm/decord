// Module ID: 15401
// Function ID: 15402
// Name: FormatNumericRange
// Dependencies: [15402]
// Exports: FormatNumericRange

// Module 15401 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15402 */;


export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

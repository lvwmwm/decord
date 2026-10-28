// Module ID: 15515
// Function ID: 15516
// Name: FormatNumericRange
// Dependencies: [15516]
// Exports: FormatNumericRange

// Module 15515 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15516 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

// Module ID: 14487
// Function ID: 14488
// Name: FormatNumericRange
// Dependencies: [14488]
// Exports: FormatNumericRange

// Module 14487 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 14488 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

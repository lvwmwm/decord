// Module ID: 15517
// Function ID: 15518
// Name: FormatNumericRange
// Dependencies: [15518]
// Exports: FormatNumericRange

// Module 15517 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15518 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

// Module ID: 14489
// Function ID: 14490
// Name: FormatNumericRangeToParts
// Dependencies: [14488]
// Exports: FormatNumericRangeToParts

// Module 14489 (FormatNumericRangeToParts)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 14488 */;


export const FormatNumericRangeToParts = function FormatNumericRangeToParts(arg0, isNaN, isNaN2, getInternalSlots) {
  let obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  return result.map((type, index) => {
    const obj = { type: type.type, value: type.value, source: type.source, result: index.toString() };
    return obj;
  });
};

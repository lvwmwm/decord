// Module ID: 15262
// Function ID: 15263
// Name: FormatNumericRangeToParts
// Dependencies: [15261]
// Exports: FormatNumericRangeToParts

// Module 15262 (FormatNumericRangeToParts)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15261 */;


export const FormatNumericRangeToParts = function FormatNumericRangeToParts(arg0, isNaN, isNaN2, getInternalSlots) {
  let obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  return result.map((type, index) => {
    const obj = { type: type.type, value: type.value, source: type.source, result: index.toString() };
    return obj;
  });
};

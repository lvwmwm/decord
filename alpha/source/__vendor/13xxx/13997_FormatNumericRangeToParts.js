// Module ID: 13997
// Function ID: 13998
// Name: FormatNumericRangeToParts
// Dependencies: [13996]
// Exports: FormatNumericRangeToParts

// Module 13997 (FormatNumericRangeToParts)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 13996 */;


export const FormatNumericRangeToParts = function FormatNumericRangeToParts(arg0, isNaN, isNaN2, getInternalSlots) {
  let obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  return result.map((type, index) => {
    const obj = { type: type.type, value: type.value, source: type.source, result: index.toString() };
    return obj;
  });
};

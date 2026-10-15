// Module ID: 15144
// Function ID: 15145
// Name: FormatNumericRangeToParts
// Dependencies: [15143]
// Exports: FormatNumericRangeToParts

// Module 15144 (FormatNumericRangeToParts)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15143 */;


export const FormatNumericRangeToParts = function FormatNumericRangeToParts(arg0, isNaN, isNaN2, getInternalSlots) {
  let obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  return result.map((type, index) => {
    const obj = { type: type.type, value: type.value, source: type.source, result: index.toString() };
    return obj;
  });
};

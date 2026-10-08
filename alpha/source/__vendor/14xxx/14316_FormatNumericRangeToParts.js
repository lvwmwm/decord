// Module ID: 14316
// Function ID: 14317
// Name: FormatNumericRangeToParts
// Dependencies: [14315]
// Exports: FormatNumericRangeToParts

// Module 14316 (FormatNumericRangeToParts)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 14315 */;


export const FormatNumericRangeToParts = function FormatNumericRangeToParts(arg0, isNaN, isNaN2, getInternalSlots) {
  let obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  return result.map((type, index) => {
    const obj = { type: type.type, value: type.value, source: type.source, result: index.toString() };
    return obj;
  });
};

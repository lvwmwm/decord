// Module ID: 14235
// Function ID: 14236
// Name: __exportStarResult19
// Dependencies: [14234]

// Module 14235 (__exportStarResult19)
import __exportStarResult25 from "__exportStarResult25" /* 14234 */;

require = arg1;
const dependencyMap = arg6;
arg5.FormatNumericRangeToParts = function FormatNumericRangeToParts(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = __exportStarResult25.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  return result.map((type) => ({ type: type.type, value: type.value, source: type.source, result: arg1.toString() }));
};

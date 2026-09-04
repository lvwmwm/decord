// Module ID: 14161
// Function ID: 14162
// Name: __exportStarResult19
// Dependencies: [14160]

// Module 14161 (__exportStarResult19)
import __exportStarResult25 from "__exportStarResult25" /* 14160 */;

require = arg1;
const dependencyMap = arg6;
arg5.FormatNumericRangeToParts = function FormatNumericRangeToParts(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = __exportStarResult25.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  return result.map((type) => ({ type: type.type, value: type.value, source: type.source, result: arg1.toString() }));
};

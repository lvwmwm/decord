// Module ID: 13669
// Function ID: 13670
// Name: __exportStarResult19
// Dependencies: [13668]

// Module 13669 (__exportStarResult19)
import __exportStarResult25 from "__exportStarResult25" /* 13668 */;

require = arg1;
const dependencyMap = arg6;
arg5.FormatNumericRangeToParts = function FormatNumericRangeToParts(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = __exportStarResult25.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  return result.map((type) => ({ type: type.type, value: type.value, source: type.source, result: arg1.toString() }));
};

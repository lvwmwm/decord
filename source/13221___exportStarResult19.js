// Module ID: 13221
// Function ID: 101820
// Name: __exportStarResult19
// Dependencies: [13220]

// Module 13221 (__exportStarResult19)
const require = arg1;
const dependencyMap = arg6;
arg5.FormatNumericRangeToParts = function FormatNumericRangeToParts(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = require(13220) /* __exportStarResult25 */.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  return result.map((type) => ({ type: type.type, value: type.value, source: type.source, result: arg1.toString() }));
};

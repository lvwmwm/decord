// Module ID: 13424
// Function ID: 13425
// Name: __exportStarResult19
// Dependencies: [13423]

// Module 13424 (__exportStarResult19)
const require = arg1;
const dependencyMap = arg6;
arg5.FormatNumericRangeToParts = function FormatNumericRangeToParts(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = require(13423) /* __exportStarResult25 */.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  return result.map((type) => ({ type: type.type, value: type.value, source: type.source, result: arg1.toString() }));
};

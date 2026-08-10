// Module ID: 13510
// Function ID: 13511
// Name: __exportStarResult19
// Dependencies: [13509]

// Module 13510 (__exportStarResult19)
const require = arg1;
const dependencyMap = arg6;
arg5.FormatNumericRangeToParts = function FormatNumericRangeToParts(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = require(13509) /* __exportStarResult25 */.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  return result.map((type) => ({ type: type.type, value: type.value, source: type.source, result: arg1.toString() }));
};

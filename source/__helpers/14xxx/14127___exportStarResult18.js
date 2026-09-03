// Module ID: 14127
// Function ID: 14128
// Name: __exportStarResult18
// Dependencies: [14128]

// Module 14127 (__exportStarResult18)
import __exportStarResult25 from "__exportStarResult25" /* 14128 */;

require = arg1;
const dependencyMap = arg6;
arg5.FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = __exportStarResult25.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

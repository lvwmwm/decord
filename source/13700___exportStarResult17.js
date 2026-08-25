// Module ID: 13700
// Function ID: 13701
// Name: __exportStarResult17
// Dependencies: [13701]

// Module 13700 (__exportStarResult17)
import __exportStarResult24 from "__exportStarResult24" /* 13701 */;

require = arg1;
const dependencyMap = arg6;
arg5.FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = __exportStarResult24.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

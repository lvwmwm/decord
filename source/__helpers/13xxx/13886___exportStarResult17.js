// Module ID: 13886
// Function ID: 13887
// Name: __exportStarResult17
// Dependencies: [13887]

// Module 13886 (__exportStarResult17)
import __exportStarResult24 from "__exportStarResult24" /* 13887 */;

require = arg1;
const dependencyMap = arg6;
arg5.FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = __exportStarResult24.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

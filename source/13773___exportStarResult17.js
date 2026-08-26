// Module ID: 13773
// Function ID: 13774
// Name: __exportStarResult17
// Dependencies: [13774]

// Module 13773 (__exportStarResult17)
import __exportStarResult24 from "__exportStarResult24" /* 13774 */;

require = arg1;
const dependencyMap = arg6;
arg5.FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = __exportStarResult24.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

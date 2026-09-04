// Module ID: 14157
// Function ID: 14158
// Name: __exportStarResult17
// Dependencies: [14158]

// Module 14157 (__exportStarResult17)
import __exportStarResult24 from "__exportStarResult24" /* 14158 */;

require = arg1;
const dependencyMap = arg6;
arg5.FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = __exportStarResult24.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

// Module ID: 3431
// Function ID: 26693
// Name: endOfDecade
// Dependencies: [3210, 3211]
// Exports: default

// Module 3431 (endOfDecade)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function endOfDecade(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setFullYear(9 + 10 * Math.floor(defaultResult1.getFullYear() / 10), 11, 31);
  defaultResult1.setHours(23, 59, 59, 999);
  return defaultResult1;
};
export default exports.default;

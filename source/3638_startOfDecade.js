// Module ID: 3638
// Function ID: 27923
// Name: startOfDecade
// Dependencies: [3210, 3211]
// Exports: default

// Module 3638 (startOfDecade)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function startOfDecade(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setFullYear(10 * Math.floor(defaultResult1.getFullYear() / 10), 0, 1);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;

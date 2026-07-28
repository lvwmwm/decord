// Module ID: 3616
// Function ID: 27863
// Name: lastDayOfDecade
// Dependencies: [3244, 3245]
// Exports: default

// Module 3616 (lastDayOfDecade)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function lastDayOfDecade(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setFullYear(9 + 10 * Math.floor(defaultResult1.getFullYear() / 10) + 1, 0, 0);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;

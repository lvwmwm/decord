// Module ID: 3586
// Function ID: 27763
// Name: lastDayOfYear
// Dependencies: [3209, 3210]
// Exports: default

// Module 3586 (lastDayOfYear)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function lastDayOfYear(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setFullYear(defaultResult1.getFullYear() + 1, 0, 0);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;

// Module ID: 3374
// Function ID: 26511
// Name: startOfDay
// Dependencies: [3210, 3211]
// Exports: default

// Module 3374 (startOfDay)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function startOfDay(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;

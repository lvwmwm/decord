// Module ID: 3408
// Function ID: 26614
// Name: startOfDay
// Dependencies: [3244, 3245]
// Exports: default

// Module 3408 (startOfDay)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function startOfDay(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;

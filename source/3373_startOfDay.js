// Module ID: 3373
// Function ID: 26500
// Name: startOfDay
// Dependencies: [3209, 3210]
// Exports: default

// Module 3373 (startOfDay)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function startOfDay(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;

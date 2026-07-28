// Module ID: 3460
// Function ID: 26780
// Name: startOfMonth
// Dependencies: [3244, 3245]
// Exports: default

// Module 3460 (startOfMonth)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function startOfMonth(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setDate(1);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;

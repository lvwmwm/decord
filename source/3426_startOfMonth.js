// Module ID: 3426
// Function ID: 26678
// Name: startOfMonth
// Dependencies: [3210, 3211]
// Exports: default

// Module 3426 (startOfMonth)
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

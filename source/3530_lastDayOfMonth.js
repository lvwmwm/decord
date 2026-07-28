// Module ID: 3530
// Function ID: 27030
// Name: lastDayOfMonth
// Dependencies: [3244, 3245]
// Exports: default

// Module 3530 (lastDayOfMonth)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function lastDayOfMonth(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const month = defaultResult1.getMonth();
  defaultResult1.setFullYear(defaultResult1.getFullYear(), month + 1, 0);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;

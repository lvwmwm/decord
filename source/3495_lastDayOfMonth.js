// Module ID: 3495
// Function ID: 26915
// Name: lastDayOfMonth
// Dependencies: [3209, 3210]
// Exports: default

// Module 3495 (lastDayOfMonth)
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

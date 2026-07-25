// Module ID: 3496
// Function ID: 26927
// Name: lastDayOfMonth
// Dependencies: [3210, 3211]
// Exports: default

// Module 3496 (lastDayOfMonth)
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

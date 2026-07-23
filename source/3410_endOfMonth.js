// Module ID: 3410
// Function ID: 26620
// Name: endOfMonth
// Dependencies: [3209, 3210]
// Exports: default

// Module 3410 (endOfMonth)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function endOfMonth(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const month = defaultResult1.getMonth();
  defaultResult1.setFullYear(defaultResult1.getFullYear(), month + 1, 0);
  defaultResult1.setHours(23, 59, 59, 999);
  return defaultResult1;
};
export default exports.default;

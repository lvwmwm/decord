// Module ID: 3474
// Function ID: 26853
// Name: getDaysInMonth
// Dependencies: [3209, 3210]
// Exports: default

// Module 3474 (getDaysInMonth)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function getDaysInMonth(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const fullYear = defaultResult1.getFullYear();
  const month = defaultResult1.getMonth();
  const date = new Date(0);
  date.setFullYear(fullYear, month + 1, 0);
  date.setHours(0, 0, 0, 0);
  return date.getDate();
};
export default exports.default;

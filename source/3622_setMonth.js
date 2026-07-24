// Module ID: 3622
// Function ID: 27868
// Name: setMonth
// Dependencies: [3213, 3209, 3474, 3210]
// Exports: default

// Module 3622 (setMonth)
import toInteger from "toInteger";
import _typeof from "_typeof";
import getDaysInMonth from "getDaysInMonth";
import requiredArgs from "requiredArgs";


export default function setMonth(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const defaultResult2 = toInteger.default(defaultResult1);
  const fullYear = defaultResult1.getFullYear();
  const date1 = new Date(0);
  date1.setFullYear(fullYear, defaultResult2, 15);
  date1.setHours(0, 0, 0, 0);
  defaultResult1.setMonth(defaultResult2, Math.min(defaultResult1.getDate(), getDaysInMonth.default(date1)));
  return defaultResult1;
};
export default exports.default;

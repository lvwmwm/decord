// Module ID: 3569
// Function ID: 27721
// Name: isThisMonth
// Dependencies: [3561, 3211]
// Exports: default

// Module 3569 (isThisMonth)
import isSameMonth from "isSameMonth";
import requiredArgs from "requiredArgs";


export default function isThisMonth(defaultResult2) {
  requiredArgs.default(1, arguments);
  return isSameMonth.default(Date.now(), defaultResult2);
};
export default exports.default;

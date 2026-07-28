// Module ID: 3603
// Function ID: 27824
// Name: isThisMonth
// Dependencies: [3595, 3245]
// Exports: default

// Module 3603 (isThisMonth)
import isSameMonth from "isSameMonth";
import requiredArgs from "requiredArgs";


export default function isThisMonth(defaultResult2) {
  requiredArgs.default(1, arguments);
  return isSameMonth.default(Date.now(), defaultResult2);
};
export default exports.default;

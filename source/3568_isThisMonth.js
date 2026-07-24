// Module ID: 3568
// Function ID: 27710
// Name: isThisMonth
// Dependencies: [3560, 3210]
// Exports: default

// Module 3568 (isThisMonth)
import isSameMonth from "isSameMonth";
import requiredArgs from "requiredArgs";


export default function isThisMonth(defaultResult2) {
  requiredArgs.default(1, arguments);
  return isSameMonth.default(Date.now(), defaultResult2);
};
export default exports.default;

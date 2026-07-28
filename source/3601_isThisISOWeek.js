// Module ID: 3601
// Function ID: 27818
// Name: isThisISOWeek
// Dependencies: [3591, 3245]
// Exports: default

// Module 3601 (isThisISOWeek)
import isSameISOWeek from "isSameISOWeek";
import requiredArgs from "requiredArgs";


export default function isThisISOWeek(defaultResult1) {
  requiredArgs.default(1, arguments);
  return isSameISOWeek.default(defaultResult1, Date.now());
};
export default exports.default;

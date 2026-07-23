// Module ID: 3566
// Function ID: 27703
// Name: isThisISOWeek
// Dependencies: [3556, 3210]
// Exports: default

// Module 3566 (isThisISOWeek)
import isSameISOWeek from "isSameISOWeek";
import requiredArgs from "requiredArgs";


export default function isThisISOWeek(defaultResult1) {
  requiredArgs.default(1, arguments);
  return isSameISOWeek.default(defaultResult1, Date.now());
};
export default exports.default;

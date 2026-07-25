// Module ID: 3567
// Function ID: 27715
// Name: isThisISOWeek
// Dependencies: [3557, 3211]
// Exports: default

// Module 3567 (isThisISOWeek)
import isSameISOWeek from "isSameISOWeek";
import requiredArgs from "requiredArgs";


export default function isThisISOWeek(defaultResult1) {
  requiredArgs.default(1, arguments);
  return isSameISOWeek.default(defaultResult1, Date.now());
};
export default exports.default;

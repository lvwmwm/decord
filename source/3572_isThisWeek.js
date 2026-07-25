// Module ID: 3572
// Function ID: 27730
// Name: isThisWeek
// Dependencies: [3558, 3211]
// Exports: default

// Module 3572 (isThisWeek)
import isSameWeek from "isSameWeek";
import requiredArgs from "requiredArgs";


export default function isThisWeek(defaultResult1, date) {
  requiredArgs.default(1, arguments);
  return isSameWeek.default(defaultResult1, Date.now(), date);
};
export default exports.default;

// Module ID: 3571
// Function ID: 27719
// Name: isThisWeek
// Dependencies: [3557, 3210]
// Exports: default

// Module 3571 (isThisWeek)
import isSameWeek from "isSameWeek";
import requiredArgs from "requiredArgs";


export default function isThisWeek(defaultResult1, date) {
  requiredArgs.default(1, arguments);
  return isSameWeek.default(defaultResult1, Date.now(), date);
};
export default exports.default;

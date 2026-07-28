// Module ID: 3606
// Function ID: 27833
// Name: isThisWeek
// Dependencies: [3592, 3245]
// Exports: default

// Module 3606 (isThisWeek)
import isSameWeek from "isSameWeek";
import requiredArgs from "requiredArgs";


export default function isThisWeek(defaultResult1, date) {
  requiredArgs.default(1, arguments);
  return isSameWeek.default(defaultResult1, Date.now(), date);
};
export default exports.default;

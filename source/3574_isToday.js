// Module ID: 3574
// Function ID: 27728
// Name: isToday
// Dependencies: [3390, 3210]
// Exports: default

// Module 3574 (isToday)
import isSameDay from "isSameDay";
import requiredArgs from "requiredArgs";


export default function isToday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return isSameDay.default(defaultResult1, Date.now());
};
export default exports.default;

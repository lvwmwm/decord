// Module ID: 3575
// Function ID: 27740
// Name: isToday
// Dependencies: [3391, 3211]
// Exports: default

// Module 3575 (isToday)
import isSameDay from "isSameDay";
import requiredArgs from "requiredArgs";


export default function isToday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return isSameDay.default(defaultResult1, Date.now());
};
export default exports.default;

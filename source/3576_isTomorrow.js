// Module ID: 3576
// Function ID: 27742
// Name: isTomorrow
// Dependencies: [3358, 3391, 3211]
// Exports: default

// Module 3576 (isTomorrow)
import addDays from "addDays";
import isSameDay from "isSameDay";
import requiredArgs from "requiredArgs";


export default function isTomorrow(defaultResult1) {
  requiredArgs.default(1, arguments);
  return isSameDay.default(defaultResult1, addDays.default(Date.now(), 1));
};
export default exports.default;

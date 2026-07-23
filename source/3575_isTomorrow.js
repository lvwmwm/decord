// Module ID: 3575
// Function ID: 27730
// Name: isTomorrow
// Dependencies: [3357, 3390, 3210]
// Exports: default

// Module 3575 (isTomorrow)
import addDays from "addDays";
import isSameDay from "isSameDay";
import requiredArgs from "requiredArgs";


export default function isTomorrow(defaultResult1) {
  requiredArgs.default(1, arguments);
  return isSameDay.default(defaultResult1, addDays.default(Date.now(), 1));
};
export default exports.default;

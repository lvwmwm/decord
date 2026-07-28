// Module ID: 3610
// Function ID: 27845
// Name: isTomorrow
// Dependencies: [3392, 3425, 3245]
// Exports: default

// Module 3610 (isTomorrow)
import addDays from "addDays";
import isSameDay from "isSameDay";
import requiredArgs from "requiredArgs";


export default function isTomorrow(defaultResult1) {
  requiredArgs.default(1, arguments);
  return isSameDay.default(defaultResult1, addDays.default(Date.now(), 1));
};
export default exports.default;

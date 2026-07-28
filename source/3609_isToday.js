// Module ID: 3609
// Function ID: 27842
// Name: isToday
// Dependencies: [3425, 3245]
// Exports: default

// Module 3609 (isToday)
import isSameDay from "isSameDay";
import requiredArgs from "requiredArgs";


export default function isToday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return isSameDay.default(defaultResult1, Date.now());
};
export default exports.default;

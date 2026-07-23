// Module ID: 3579
// Function ID: 27742
// Name: isYesterday
// Dependencies: [3390, 3580, 3210]
// Exports: default

// Module 3579 (isYesterday)
import isSameDay from "isSameDay";
import subDays from "subDays";
import requiredArgs from "requiredArgs";


export default function isYesterday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return isSameDay.default(defaultResult1, subDays.default(Date.now(), 1));
};
export default exports.default;

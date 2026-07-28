// Module ID: 3614
// Function ID: 27857
// Name: isYesterday
// Dependencies: [3425, 3615, 3245]
// Exports: default

// Module 3614 (isYesterday)
import isSameDay from "isSameDay";
import subDays from "subDays";
import requiredArgs from "requiredArgs";


export default function isYesterday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return isSameDay.default(defaultResult1, subDays.default(Date.now(), 1));
};
export default exports.default;

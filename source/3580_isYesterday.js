// Module ID: 3580
// Function ID: 27755
// Name: isYesterday
// Dependencies: [3391, 3581, 3211]
// Exports: default

// Module 3580 (isYesterday)
import isSameDay from "isSameDay";
import subDays from "subDays";
import requiredArgs from "requiredArgs";


export default function isYesterday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return isSameDay.default(defaultResult1, subDays.default(Date.now(), 1));
};
export default exports.default;

// Module ID: 3584
// Function ID: 27753
// Name: lastDayOfYear
// Dependencies: [3366, 3370]
// Exports: default

// Module 3584 (lastDayOfYear)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function lastDayOfYear(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  defaultResult1.setFullYear(defaultResult1.getFullYear() + 1, 0, 0);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;

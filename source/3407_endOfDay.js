// Module ID: 3407
// Function ID: 26607
// Name: endOfDay
// Dependencies: [3366, 3370]
// Exports: default

// Module 3407 (endOfDay)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function endOfDay(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  defaultResult1.setHours(23, 59, 59, 999);
  return defaultResult1;
};
export default exports.default;

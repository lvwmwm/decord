// Module ID: 3433
// Function ID: 26685
// Name: endOfMinute
// Dependencies: [3366, 3370]
// Exports: default

// Module 3433 (endOfMinute)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function endOfMinute(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  defaultResult1.setSeconds(59, 999);
  return defaultResult1;
};
export default exports.default;

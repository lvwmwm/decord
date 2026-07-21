// Module ID: 3429
// Function ID: 26673
// Name: endOfHour
// Dependencies: [3366, 3370]
// Exports: default

// Module 3429 (endOfHour)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function endOfHour(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  defaultResult1.setMinutes(59, 59, 999);
  return defaultResult1;
};
export default exports.default;

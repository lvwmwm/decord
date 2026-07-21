// Module ID: 3423
// Function ID: 26655
// Name: startOfMonth
// Dependencies: [3366, 3370]
// Exports: default

// Module 3423 (startOfMonth)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function startOfMonth(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  defaultResult1.setDate(1);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;

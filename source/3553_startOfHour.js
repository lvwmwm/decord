// Module ID: 3553
// Function ID: 27660
// Name: startOfHour
// Dependencies: [3366, 3370]
// Exports: default

// Module 3553 (startOfHour)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function startOfHour(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  defaultResult1.setMinutes(0, 0, 0);
  return defaultResult1;
};
export default exports.default;

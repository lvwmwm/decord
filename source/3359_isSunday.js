// Module ID: 3359
// Function ID: 26454
// Name: isSunday
// Dependencies: [3366, 3370]
// Exports: default

// Module 3359 (isSunday)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function isSunday(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  return 0 === startOfWeek.default(defaultResult1).getDay();
};
export default exports.default;

// Module ID: 3360
// Function ID: 26457
// Name: isSaturday
// Dependencies: [3366, 3370]
// Exports: default

// Module 3360 (isSaturday)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function isSaturday(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  return 6 === startOfWeek.default(defaultResult1).getDay();
};
export default exports.default;

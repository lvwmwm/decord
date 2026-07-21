// Module ID: 3550
// Function ID: 27651
// Name: isMonday
// Dependencies: [3366, 3370]
// Exports: default

// Module 3550 (isMonday)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function isMonday(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  return 1 === startOfWeek.default(defaultResult1).getDay();
};
export default exports.default;

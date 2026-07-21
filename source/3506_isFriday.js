// Module ID: 3506
// Function ID: 26939
// Name: isFriday
// Dependencies: [3366, 3370]
// Exports: default

// Module 3506 (isFriday)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function isFriday(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  return 5 === startOfWeek.default(defaultResult1).getDay();
};
export default exports.default;

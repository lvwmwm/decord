// Module ID: 3571
// Function ID: 27714
// Name: isThursday
// Dependencies: [3366, 3370]
// Exports: default

// Module 3571 (isThursday)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function isThursday(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  return 4 === startOfWeek.default(defaultResult1).getDay();
};
export default exports.default;

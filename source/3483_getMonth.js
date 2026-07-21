// Module ID: 3483
// Function ID: 26875
// Name: getMonth
// Dependencies: [3366, 3370]
// Exports: default

// Module 3483 (getMonth)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function getMonth(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  return startOfWeek.default(defaultResult1).getMonth();
};
export default exports.default;

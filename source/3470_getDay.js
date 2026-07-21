// Module ID: 3470
// Function ID: 26837
// Name: getDay
// Dependencies: [3366, 3370]
// Exports: default

// Module 3470 (getDay)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function getDay(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  return startOfWeek.default(defaultResult1).getDay();
};
export default exports.default;

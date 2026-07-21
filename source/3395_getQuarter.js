// Module ID: 3395
// Function ID: 26570
// Name: getQuarter
// Dependencies: [3366, 3370]
// Exports: default

// Module 3395 (getQuarter)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function getQuarter(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  return Math.floor(startOfWeek.default(defaultResult1).getMonth() / 3) + 1;
};
export default exports.default;

// Module ID: 3494
// Function ID: 26908
// Name: getYear
// Dependencies: [3366, 3370]
// Exports: default

// Module 3494 (getYear)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function getYear(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  return startOfWeek.default(defaultResult1).getFullYear();
};
export default exports.default;

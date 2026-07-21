// Module ID: 3482
// Function ID: 26872
// Name: getMinutes
// Dependencies: [3366, 3370]
// Exports: default

// Module 3482 (getMinutes)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function getMinutes(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  return startOfWeek.default(defaultResult1).getMinutes();
};
export default exports.default;

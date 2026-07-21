// Module ID: 3486
// Function ID: 26884
// Name: getTime
// Dependencies: [3366, 3370]
// Exports: default

// Module 3486 (getTime)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function getTime(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  return startOfWeek.default(defaultResult1).getTime();
};
export default exports.default;

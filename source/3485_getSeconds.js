// Module ID: 3485
// Function ID: 26881
// Name: getSeconds
// Dependencies: [3366, 3370]
// Exports: default

// Module 3485 (getSeconds)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function getSeconds(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  return startOfWeek.default(defaultResult1).getSeconds();
};
export default exports.default;

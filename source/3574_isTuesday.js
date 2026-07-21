// Module ID: 3574
// Function ID: 27723
// Name: isTuesday
// Dependencies: [3366, 3370]
// Exports: default

// Module 3574 (isTuesday)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function isTuesday(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  return 2 === startOfWeek.default(defaultResult1).getDay();
};
export default exports.default;

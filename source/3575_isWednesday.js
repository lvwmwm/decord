// Module ID: 3575
// Function ID: 27726
// Name: isWednesday
// Dependencies: [3366, 3370]
// Exports: default

// Module 3575 (isWednesday)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function isWednesday(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  return 3 === startOfWeek.default(defaultResult1).getDay();
};
export default exports.default;

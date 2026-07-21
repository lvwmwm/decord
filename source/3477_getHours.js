// Module ID: 3477
// Function ID: 26857
// Name: getHours
// Dependencies: [3366, 3370]
// Exports: default

// Module 3477 (getHours)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function getHours(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  return startOfWeek.default(defaultResult1).getHours();
};
export default exports.default;

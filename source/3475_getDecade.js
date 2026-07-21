// Module ID: 3475
// Function ID: 26852
// Name: getDecade
// Dependencies: [3366, 3370]
// Exports: default

// Module 3475 (getDecade)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function getDecade(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  return 10 * Math.floor(startOfWeek.default(defaultResult1).getFullYear() / 10);
};
export default exports.default;

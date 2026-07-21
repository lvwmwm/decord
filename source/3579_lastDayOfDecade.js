// Module ID: 3579
// Function ID: 27738
// Name: lastDayOfDecade
// Dependencies: [3366, 3370]
// Exports: default

// Module 3579 (lastDayOfDecade)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function lastDayOfDecade(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  defaultResult1.setFullYear(9 + 10 * Math.floor(defaultResult1.getFullYear() / 10) + 1, 0, 0);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;

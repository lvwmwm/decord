// Module ID: 3635
// Function ID: 27901
// Name: startOfDecade
// Dependencies: [3366, 3370]
// Exports: default

// Module 3635 (startOfDecade)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function startOfDecade(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  defaultResult1.setFullYear(10 * Math.floor(defaultResult1.getFullYear() / 10), 0, 1);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;

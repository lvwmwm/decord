// Module ID: 3416
// Function ID: 26634
// Name: startOfMinute
// Dependencies: [3366, 3370]
// Exports: default

// Module 3416 (startOfMinute)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function startOfMinute(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  defaultResult1.setSeconds(0, 0);
  return defaultResult1;
};
export default exports.default;

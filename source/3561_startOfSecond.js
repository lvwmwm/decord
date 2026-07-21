// Module ID: 3561
// Function ID: 27684
// Name: startOfSecond
// Dependencies: [3366, 3370]
// Exports: default

// Module 3561 (startOfSecond)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function startOfSecond(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  defaultResult1.setMilliseconds(0);
  return defaultResult1;
};
export default exports.default;

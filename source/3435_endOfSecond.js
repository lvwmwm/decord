// Module ID: 3435
// Function ID: 26691
// Name: endOfSecond
// Dependencies: [3366, 3370]
// Exports: default

// Module 3435 (endOfSecond)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function endOfSecond(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  defaultResult1.setMilliseconds(999);
  return defaultResult1;
};
export default exports.default;

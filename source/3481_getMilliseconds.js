// Module ID: 3481
// Function ID: 26869
// Name: getMilliseconds
// Dependencies: [3366, 3370]
// Exports: default

// Module 3481 (getMilliseconds)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function getMilliseconds(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  return startOfWeek.default(defaultResult1).getMilliseconds();
};
export default exports.default;

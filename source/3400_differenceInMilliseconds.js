// Module ID: 3400
// Function ID: 26586
// Name: differenceInMilliseconds
// Dependencies: [3366, 3370]
// Exports: default

// Module 3400 (differenceInMilliseconds)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function differenceInMilliseconds(defaultResult1, defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(2, arguments);
  const time = startOfWeek.default(defaultResult1).getTime();
  defaultResult1 = startOfWeek.default(defaultResult1);
  return time - startOfWeek.default(defaultResult1).getTime();
};
export default exports.default;

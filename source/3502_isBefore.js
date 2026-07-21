// Module ID: 3502
// Function ID: 26928
// Name: isBefore
// Dependencies: [3366, 3370]
// Exports: default

// Module 3502 (isBefore)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function isBefore(defaultResult1, defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(2, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  const time = defaultResult1.getTime();
  return time < startOfWeek.default(defaultResult1).getTime();
};
export default exports.default;

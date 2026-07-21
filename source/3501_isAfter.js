// Module ID: 3501
// Function ID: 26925
// Name: isAfter
// Dependencies: [3366, 3370]
// Exports: default

// Module 3501 (isAfter)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function isAfter(defaultResult1, defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(2, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  const time = defaultResult1.getTime();
  return time > startOfWeek.default(defaultResult1).getTime();
};
export default exports.default;

// Module ID: 3507
// Function ID: 26942
// Name: isFuture
// Dependencies: [3366, 3370]
// Exports: default

// Module 3507 (isFuture)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function isFuture(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  const time = startOfWeek.default(defaultResult1).getTime();
  return time > Date.now();
};
export default exports.default;

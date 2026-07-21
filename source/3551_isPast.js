// Module ID: 3551
// Function ID: 27654
// Name: isPast
// Dependencies: [3366, 3370]
// Exports: default

// Module 3551 (isPast)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function isPast(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  const time = startOfWeek.default(defaultResult1).getTime();
  return time < Date.now();
};
export default exports.default;

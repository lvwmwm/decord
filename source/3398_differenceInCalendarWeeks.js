// Module ID: 3398
// Function ID: 26583
// Name: differenceInCalendarWeeks
// Dependencies: [3368, 3372, 3210]
// Exports: default

// Module 3398 (differenceInCalendarWeeks)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";
import requiredArgs from "requiredArgs";

let c3 = 604800000;

export default function differenceInCalendarWeeks(defaultResult1, defaultResult1, defaultResult2) {
  requiredArgs.default(2, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1, defaultResult2);
  defaultResult2 = startOfWeek.default(defaultResult1, defaultResult2);
  const time = defaultResult1.getTime();
  const diff = time - getTimezoneOffsetInMilliseconds.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - getTimezoneOffsetInMilliseconds.default(defaultResult2))) / c3);
};
export default exports.default;

// Module ID: 3371
// Function ID: 26494
// Name: differenceInCalendarDays
// Dependencies: [3372, 3373, 3210]
// Exports: default

// Module 3371 (differenceInCalendarDays)
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";
import startOfDay from "startOfDay";
import requiredArgs from "requiredArgs";

let c3 = 86400000;

export default function differenceInCalendarDays(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = startOfDay.default(defaultResult1);
  const defaultResult2 = startOfDay.default(defaultResult1);
  const time = defaultResult1.getTime();
  const diff = time - getTimezoneOffsetInMilliseconds.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - getTimezoneOffsetInMilliseconds.default(defaultResult2))) / c3);
};
export default exports.default;

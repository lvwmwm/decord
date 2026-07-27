// Module ID: 3395
// Function ID: 26584
// Name: differenceInCalendarISOWeeks
// Dependencies: [3373, 3368, 3211]
// Exports: default

// Module 3395 (differenceInCalendarISOWeeks)
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";
import startOfISOWeek from "startOfISOWeek";
import requiredArgs from "requiredArgs";

let c3 = 604800000;

export default function differenceInCalendarISOWeeks(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = startOfISOWeek.default(defaultResult1);
  const defaultResult2 = startOfISOWeek.default(defaultResult1);
  const time = defaultResult1.getTime();
  const diff = time - getTimezoneOffsetInMilliseconds.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - getTimezoneOffsetInMilliseconds.default(defaultResult2))) / c3);
};
export default exports.default;

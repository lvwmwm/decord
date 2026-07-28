// Module ID: 3429
// Function ID: 26686
// Name: differenceInCalendarISOWeeks
// Dependencies: [3407, 3402, 3245]
// Exports: default

// Module 3429 (differenceInCalendarISOWeeks)
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

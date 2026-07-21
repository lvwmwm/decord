// Module ID: 3397
// Function ID: 26576
// Name: differenceInCalendarYears
// Dependencies: [3366, 3370]
// Exports: default

// Module 3397 (differenceInCalendarYears)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function differenceInCalendarYears(defaultResult1, defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(2, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  const fullYear = defaultResult1.getFullYear();
  return fullYear - startOfWeek.default(defaultResult1).getFullYear();
};
export default exports.default;

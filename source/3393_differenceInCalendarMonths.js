// Module ID: 3393
// Function ID: 26564
// Name: differenceInCalendarMonths
// Dependencies: [3366, 3370]
// Exports: default

// Module 3393 (differenceInCalendarMonths)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function differenceInCalendarMonths(defaultResult1, defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(2, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  const defaultResult2 = startOfWeek.default(defaultResult1);
  const fullYear = defaultResult1.getFullYear();
  const diff = fullYear - defaultResult2.getFullYear();
  const month = defaultResult1.getMonth();
  return 12 * diff + (month - defaultResult2.getMonth());
};
export default exports.default;

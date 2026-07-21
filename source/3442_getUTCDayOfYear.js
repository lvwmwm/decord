// Module ID: 3442
// Function ID: 26746
// Name: getUTCDayOfYear
// Dependencies: [3366, 3370]
// Exports: default

// Module 3442 (getUTCDayOfYear)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";

let closure_2 = 86400000;

export default function getUTCDayOfYear(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  const time = defaultResult1.getTime();
  defaultResult1.setUTCMonth(0, 1);
  defaultResult1.setUTCHours(0, 0, 0, 0);
  return Math.floor((time - defaultResult1.getTime()) / closure_2) + 1;
};
export default exports.default;

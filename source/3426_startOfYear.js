// Module ID: 3426
// Function ID: 26664
// Name: startOfYear
// Dependencies: [3366, 3370]
// Exports: default

// Module 3426 (startOfYear)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function startOfYear(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(startOfWeek.default(defaultResult1).getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
};
export default exports.default;

// Module ID: 3505
// Function ID: 26936
// Name: isFirstDayOfMonth
// Dependencies: [3366, 3370]
// Exports: default

// Module 3505 (isFirstDayOfMonth)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function isFirstDayOfMonth(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  return 1 === startOfWeek.default(defaultResult1).getDate();
};
export default exports.default;

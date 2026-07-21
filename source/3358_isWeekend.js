// Module ID: 3358
// Function ID: 26451
// Name: isWeekend
// Dependencies: [3366, 3370]
// Exports: default

// Module 3358 (isWeekend)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function isWeekend(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  const day = startOfWeek.default(defaultResult1).getDay();
  let tmp3 = 0 === day;
  if (!tmp3) {
    tmp3 = 6 === day;
  }
  return tmp3;
};
export default exports.default;

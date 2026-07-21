// Module ID: 3478
// Function ID: 26860
// Name: getISODay
// Dependencies: [3366, 3370]
// Exports: default

// Module 3478 (getISODay)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function getISODay(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  let num = startOfWeek.default(defaultResult1).getDay();
  if (0 === num) {
    num = 7;
  }
  return num;
};
export default exports.default;

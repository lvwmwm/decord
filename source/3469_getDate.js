// Module ID: 3469
// Function ID: 26834
// Name: getDate
// Dependencies: [3366, 3370]
// Exports: default

// Module 3469 (getDate)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function getDate(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  return startOfWeek.default(defaultResult1).getDate();
};
export default exports.default;

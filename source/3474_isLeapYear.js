// Module ID: 3474
// Function ID: 26849
// Name: isLeapYear
// Dependencies: [3366, 3370]
// Exports: default

// Module 3474 (isLeapYear)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function isLeapYear(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  const fullYear = startOfWeek.default(defaultResult1).getFullYear();
  let tmp3 = fullYear % 400 === 0;
  if (!tmp3) {
    let tmp4 = fullYear % 4 === 0;
    if (tmp4) {
      tmp4 = fullYear % 100 !== 0;
    }
    tmp3 = tmp4;
  }
  return tmp3;
};
export default exports.default;

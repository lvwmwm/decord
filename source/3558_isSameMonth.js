// Module ID: 3558
// Function ID: 27675
// Name: isSameMonth
// Dependencies: [3366, 3370]
// Exports: default

// Module 3558 (isSameMonth)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function isSameMonth(defaultResult1, defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(2, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  const defaultResult2 = startOfWeek.default(defaultResult1);
  const fullYear = defaultResult1.getFullYear();
  let tmp3 = fullYear === defaultResult2.getFullYear();
  if (tmp3) {
    const month = defaultResult1.getMonth();
    tmp3 = month === defaultResult2.getMonth();
  }
  return tmp3;
};
export default exports.default;

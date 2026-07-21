// Module ID: 3562
// Function ID: 27687
// Name: isSameYear
// Dependencies: [3366, 3370]
// Exports: default

// Module 3562 (isSameYear)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function isSameYear(defaultResult1, defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(2, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  const fullYear = defaultResult1.getFullYear();
  return fullYear === startOfWeek.default(defaultResult1).getFullYear();
};
export default exports.default;

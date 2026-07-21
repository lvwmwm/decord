// Module ID: 3425
// Function ID: 26661
// Name: endOfYear
// Dependencies: [3366, 3370]
// Exports: default

// Module 3425 (endOfYear)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function endOfYear(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  defaultResult1.setFullYear(defaultResult1.getFullYear() + 1, 0, 0);
  defaultResult1.setHours(23, 59, 59, 999);
  return defaultResult1;
};
export default exports.default;

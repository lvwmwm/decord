// Module ID: 3408
// Function ID: 26610
// Name: endOfMonth
// Dependencies: [3366, 3370]
// Exports: default

// Module 3408 (endOfMonth)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function endOfMonth(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  const month = defaultResult1.getMonth();
  defaultResult1.setFullYear(defaultResult1.getFullYear(), month + 1, 0);
  defaultResult1.setHours(23, 59, 59, 999);
  return defaultResult1;
};
export default exports.default;

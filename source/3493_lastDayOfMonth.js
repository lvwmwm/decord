// Module ID: 3493
// Function ID: 26905
// Name: lastDayOfMonth
// Dependencies: [3366, 3370]
// Exports: default

// Module 3493 (lastDayOfMonth)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function lastDayOfMonth(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  const month = defaultResult1.getMonth();
  defaultResult1.setFullYear(defaultResult1.getFullYear(), month + 1, 0);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;

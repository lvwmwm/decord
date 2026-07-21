// Module ID: 3472
// Function ID: 26843
// Name: getDaysInMonth
// Dependencies: [3366, 3370]
// Exports: default

// Module 3472 (getDaysInMonth)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function getDaysInMonth(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  const fullYear = defaultResult1.getFullYear();
  const month = defaultResult1.getMonth();
  const date = new Date(0);
  date.setFullYear(fullYear, month + 1, 0);
  date.setHours(0, 0, 0, 0);
  return date.getDate();
};
export default exports.default;

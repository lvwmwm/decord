// Module ID: 3583
// Function ID: 27750
// Name: lastDayOfQuarter
// Dependencies: [3366, 3370]
// Exports: default

// Module 3583 (lastDayOfQuarter)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function lastDayOfQuarter(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  const month = defaultResult1.getMonth();
  defaultResult1.setMonth(month - month % 3 + 3, 0);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;

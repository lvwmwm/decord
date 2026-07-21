// Module ID: 3434
// Function ID: 26688
// Name: endOfQuarter
// Dependencies: [3366, 3370]
// Exports: default

// Module 3434 (endOfQuarter)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function endOfQuarter(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  const month = defaultResult1.getMonth();
  defaultResult1.setMonth(month - month % 3 + 3, 0);
  defaultResult1.setHours(23, 59, 59, 999);
  return defaultResult1;
};
export default exports.default;

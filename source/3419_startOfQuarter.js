// Module ID: 3419
// Function ID: 26643
// Name: startOfQuarter
// Dependencies: [3366, 3370]
// Exports: default

// Module 3419 (startOfQuarter)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function startOfQuarter(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  const month = defaultResult1.getMonth();
  defaultResult1.setMonth(month - month % 3, 1);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;

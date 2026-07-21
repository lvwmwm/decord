// Module ID: 3444
// Function ID: 26752
// Name: startOfUTCISOWeek
// Dependencies: [3366, 3370]
// Exports: default

// Module 3444 (startOfUTCISOWeek)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function startOfUTCISOWeek(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  const uTCDay = defaultResult1.getUTCDay();
  let num = 0;
  if (uTCDay < 1) {
    num = 7;
  }
  const sum = num + uTCDay;
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - (sum - 1));
  defaultResult1.setUTCHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;

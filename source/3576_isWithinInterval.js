// Module ID: 3576
// Function ID: 27729
// Name: isWithinInterval
// Dependencies: [3366, 3370]
// Exports: default

// Module 3576 (isWithinInterval)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function isWithinInterval(defaultResult1, start) {
  getTimezoneOffsetInMilliseconds.default(2, arguments);
  const time = startOfWeek.default(defaultResult1).getTime();
  defaultResult1 = startOfWeek.default(defaultResult1);
  const time1 = startOfWeek.default(start.start).getTime();
  const defaultResult2 = startOfWeek.default(start.start);
  const time2 = startOfWeek.default(start.end).getTime();
  if (time1 <= time2) {
    return time >= time1 && time <= time2;
  } else {
    const _RangeError = RangeError;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  }
  const defaultResult3 = startOfWeek.default(start.end);
};
export default exports.default;

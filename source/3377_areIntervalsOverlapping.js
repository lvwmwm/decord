// Module ID: 3377
// Function ID: 26507
// Name: areIntervalsOverlapping
// Dependencies: [3366, 3370]
// Exports: default

// Module 3377 (areIntervalsOverlapping)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function areIntervalsOverlapping(start, start2, inclusive) {
  getTimezoneOffsetInMilliseconds.default(2, arguments);
  start = undefined;
  if (null != start) {
    start = start.start;
  }
  const time = startOfWeek.default(start).getTime();
  let end;
  if (null != start) {
    end = start.end;
  }
  const defaultResult1 = startOfWeek.default(start);
  const time1 = startOfWeek.default(end).getTime();
  let start1;
  if (null != start2) {
    start1 = start2.start;
  }
  const defaultResult2 = startOfWeek.default(end);
  const time2 = startOfWeek.default(start1).getTime();
  let end1;
  if (null != start2) {
    end1 = start2.end;
  }
  const defaultResult3 = startOfWeek.default(start1);
  const time3 = startOfWeek.default(end1).getTime();
  if (time <= time1) {
    if (time2 <= time3) {
      if (null != inclusive) {
        if (inclusive.inclusive) {
          return time <= time3 && time2 <= time1;
        }
      }
      return time < time3 && time2 < time1;
    }
  }
  const rangeError = new RangeError("Invalid interval");
  throw rangeError;
};
export default exports.default;

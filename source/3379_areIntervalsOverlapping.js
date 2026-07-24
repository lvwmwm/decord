// Module ID: 3379
// Function ID: 26518
// Name: areIntervalsOverlapping
// Dependencies: [3209, 3210]
// Exports: default

// Module 3379 (areIntervalsOverlapping)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function areIntervalsOverlapping(start, start2, inclusive) {
  requiredArgs.default(2, arguments);
  start = undefined;
  if (null != start) {
    start = start.start;
  }
  const time = _typeof.default(start).getTime();
  let end;
  if (null != start) {
    end = start.end;
  }
  const defaultResult1 = _typeof.default(start);
  const time1 = _typeof.default(end).getTime();
  let start1;
  if (null != start2) {
    start1 = start2.start;
  }
  const defaultResult2 = _typeof.default(end);
  const time2 = _typeof.default(start1).getTime();
  let end1;
  if (null != start2) {
    end1 = start2.end;
  }
  const defaultResult3 = _typeof.default(start1);
  const time3 = _typeof.default(end1).getTime();
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

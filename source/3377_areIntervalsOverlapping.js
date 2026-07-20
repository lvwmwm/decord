// Module ID: 3377
// Function ID: 26507
// Name: areIntervalsOverlapping
// Dependencies: []
// Exports: default

// Module 3377 (areIntervalsOverlapping)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function areIntervalsOverlapping(start, start2, inclusive) {
  closure_1.default(2, arguments);
  start = undefined;
  if (null != start) {
    start = start.start;
  }
  const time = closure_0.default(start).getTime();
  let end;
  if (null != start) {
    end = start.end;
  }
  const defaultResult1 = closure_0.default(start);
  const time1 = closure_0.default(end).getTime();
  let start1;
  if (null != start2) {
    start1 = start2.start;
  }
  const defaultResult2 = closure_0.default(end);
  const time2 = closure_0.default(start1).getTime();
  let end1;
  if (null != start2) {
    end1 = start2.end;
  }
  const defaultResult3 = closure_0.default(start1);
  const time3 = closure_0.default(end1).getTime();
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

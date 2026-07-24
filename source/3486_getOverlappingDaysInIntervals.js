// Module ID: 3486
// Function ID: 26889
// Name: getOverlappingDaysInIntervals
// Dependencies: [3209, 3210]
// Exports: default

// Module 3486 (getOverlappingDaysInIntervals)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";

let c2 = 86400000;

export default function getOverlappingDaysInIntervals(arg0, arg1) {
  let obj = arg0;
  obj = arg1;
  requiredArgs.default(2, arguments);
  if (!arg0) {
    obj = {};
  }
  if (!obj) {
    obj = {};
  }
  const time = _typeof.default(obj.start).getTime();
  const defaultResult1 = _typeof.default(obj.start);
  const time1 = _typeof.default(obj.end).getTime();
  const defaultResult2 = _typeof.default(obj.end);
  let time2 = _typeof.default(obj.start).getTime();
  const defaultResult3 = _typeof.default(obj.start);
  let time3 = _typeof.default(obj.end).getTime();
  if (time <= time1) {
    if (time2 <= time3) {
      if (time < time3) {
        if (time2 < time1) {
          if (time3 > time1) {
            time3 = time1;
          }
          if (time2 < time) {
            time2 = time;
          }
          const _Math = Math;
          return Math.ceil((time3 - time2) / c2);
        }
      }
      return 0;
    }
  }
  const rangeError = new RangeError("Invalid interval");
  throw rangeError;
};
export default exports.default;

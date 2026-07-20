// Module ID: 3484
// Function ID: 26878
// Name: getOverlappingDaysInIntervals
// Dependencies: []
// Exports: default

// Module 3484 (getOverlappingDaysInIntervals)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = 86400000;

export default function getOverlappingDaysInIntervals(arg0, arg1) {
  let obj = arg0;
  obj = arg1;
  closure_1.default(2, arguments);
  if (!arg0) {
    obj = {};
  }
  if (!obj) {
    obj = {};
  }
  const time = closure_0.default(obj.start).getTime();
  const defaultResult1 = closure_0.default(obj.start);
  const time1 = closure_0.default(obj.end).getTime();
  const defaultResult2 = closure_0.default(obj.end);
  let time2 = closure_0.default(obj.start).getTime();
  const defaultResult3 = closure_0.default(obj.start);
  let time3 = closure_0.default(obj.end).getTime();
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
          return Math.ceil((time3 - time2) / closure_2);
        }
      }
      return 0;
    }
  }
  const rangeError = new RangeError("Invalid interval");
  throw rangeError;
};
export default exports.default;

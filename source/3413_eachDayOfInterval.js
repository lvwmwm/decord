// Module ID: 3413
// Function ID: 26625
// Name: eachDayOfInterval
// Dependencies: [3366, 3370]
// Exports: default

// Module 3413 (eachDayOfInterval)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function eachDayOfInterval(arg0, step) {
  let time1;
  let obj = arg0;
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  const defaultResult1 = startOfWeek.default(obj.start);
  const time = startOfWeek.default(obj.end).getTime();
  if (defaultResult1.getTime() <= time) {
    const items = [];
    defaultResult1.setHours(0, 0, 0, 0);
    step = undefined;
    if (null != step) {
      step = step.step;
    }
    let num5 = 1;
    if (null !== step) {
      num5 = 1;
      if (undefined !== step) {
        num5 = step;
      }
    }
    const NumberResult = Number(num5);
    if (NumberResult >= 1) {
      const _isNaN = isNaN;
      if (!isNaN(NumberResult)) {
        if (defaultResult1.getTime() <= time) {
          do {
            let tmp14 = closure_0;
            let arr = items.push(closure_0.default(defaultResult1));
            let setDateResult = defaultResult1.setDate(defaultResult1.getDate() + NumberResult);
            let tmp17 = defaultResult1;
            let num6 = 0;
            let num7 = 0;
            let num8 = 0;
            let num9 = 0;
            let setHoursResult1 = defaultResult1.setHours(0, 0, 0, 0);
            time1 = defaultResult1.getTime();
          } while (time1 <= time);
        }
        return items;
      }
    }
    const _RangeError2 = RangeError;
    const rangeError = new RangeError("`options.step` must be a number greater than 1");
    throw rangeError;
  } else {
    const _RangeError = RangeError;
    const rangeError1 = new RangeError("Invalid interval");
    throw rangeError1;
  }
  const defaultResult2 = startOfWeek.default(obj.end);
};
export default exports.default;

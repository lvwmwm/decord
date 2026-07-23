// Module ID: 3415
// Function ID: 26635
// Name: eachDayOfInterval
// Dependencies: [3209, 3210]
// Exports: default

// Module 3415 (eachDayOfInterval)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function eachDayOfInterval(arg0, step) {
  let time1;
  let obj = arg0;
  requiredArgs.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  const defaultResult1 = _typeof.default(obj.start);
  const time = _typeof.default(obj.end).getTime();
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
            let tmp14 = _typeof;
            let arr = items.push(_typeof.default(defaultResult1));
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
  const defaultResult2 = _typeof.default(obj.end);
};
export default exports.default;

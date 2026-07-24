// Module ID: 3417
// Function ID: 26642
// Name: eachMinuteOfInterval
// Dependencies: [3374, 3209, 3418, 3210]
// Exports: default

// Module 3417 (eachMinuteOfInterval)
import addMinutes from "addMinutes";
import _typeof from "_typeof";
import startOfMinute from "startOfMinute";
import requiredArgs from "requiredArgs";


export default function eachMinuteOfInterval(start, step) {
  let time2;
  requiredArgs.default(1, arguments);
  let defaultResult1 = startOfMinute.default(_typeof.default(start.start));
  const time = defaultResult1.getTime();
  const time1 = _typeof.default(start.end).getTime();
  if (time >= time1) {
    const _RangeError2 = RangeError;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  } else {
    const items = [];
    step = undefined;
    if (null != step) {
      step = step.step;
    }
    let num = 1;
    if (null !== step) {
      num = 1;
      if (undefined !== step) {
        num = step;
      }
    }
    const NumberResult = Number(num);
    if (NumberResult >= 1) {
      const _isNaN = isNaN;
      if (!isNaN(NumberResult)) {
        if (defaultResult1.getTime() <= time1) {
          do {
            let tmp6 = _typeof;
            let arr = items.push(_typeof.default(defaultResult1));
            let tmp8 = addMinutes;
            let defaultResult3 = addMinutes.default(defaultResult1, NumberResult);
            defaultResult1 = defaultResult3;
            time2 = defaultResult3.getTime();
          } while (time2 <= time1);
        }
        return items;
      }
    }
    const _RangeError = RangeError;
    const rangeError1 = new RangeError("`options.step` must be a number equal to or greater than 1");
    throw rangeError1;
  }
  const defaultResult2 = _typeof.default(start.end);
};
export default exports.default;

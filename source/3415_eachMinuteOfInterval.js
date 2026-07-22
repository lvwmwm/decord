// Module ID: 3415
// Function ID: 26636
// Name: eachMinuteOfInterval
// Dependencies: [1946157069, 3207, 3210, 3448]
// Exports: default

// Module 3415 (eachMinuteOfInterval)
import _typeof from "_typeof";
import startOfUTCWeek from "startOfUTCWeek";
import startOfUTCWeekYear from "startOfUTCWeekYear";

let closure_0 = _interopRequireDefault(require(dependencyMap[0]));

export default function eachMinuteOfInterval(start, step) {
  let time2;
  startOfUTCWeekYear.default(1, arguments);
  let defaultResult1 = startOfUTCWeek.default(_typeof.default(start.start));
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
            let tmp6 = closure_1;
            let arr = items.push(closure_1.default(defaultResult1));
            let tmp8 = closure_0;
            let defaultResult3 = closure_0.default(defaultResult1, NumberResult);
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

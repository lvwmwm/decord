// Module ID: 3415
// Function ID: 26636
// Name: eachMinuteOfInterval
// Dependencies: [2281701389, 2315255820, 2332033036, 2348810252]
// Exports: default

// Module 3415 (eachMinuteOfInterval)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = _interopRequireDefault(require(dependencyMap[3]));

export default function eachMinuteOfInterval(start, step) {
  let time2;
  closure_3.default(1, arguments);
  let defaultResult1 = closure_2.default(closure_1.default(start.start));
  const time = defaultResult1.getTime();
  const time1 = closure_1.default(start.end).getTime();
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
  const defaultResult2 = closure_1.default(start.end);
};
export default exports.default;

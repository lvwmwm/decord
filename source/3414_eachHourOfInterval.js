// Module ID: 3414
// Function ID: 26628
// Name: eachHourOfInterval
// Dependencies: []
// Exports: default

// Module 3414 (eachHourOfInterval)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));

export default function eachHourOfInterval(arg0, step) {
  let time2;
  let obj = arg0;
  closure_2.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  let defaultResult1 = closure_1.default(obj.start);
  const time = defaultResult1.getTime();
  const time1 = closure_1.default(obj.end).getTime();
  if (time <= time1) {
    const items = [];
    defaultResult1.setMinutes(0, 0, 0);
    step = undefined;
    if (null != step) {
      step = step.step;
    }
    let num2 = 1;
    if (null !== step) {
      num2 = 1;
      if (undefined !== step) {
        num2 = step;
      }
    }
    const NumberResult = Number(num2);
    if (NumberResult >= 1) {
      const _isNaN = isNaN;
      if (!isNaN(NumberResult)) {
        if (defaultResult1.getTime() <= time1) {
          do {
            let tmp14 = closure_1;
            let arr = items.push(closure_1.default(defaultResult1));
            let tmp16 = closure_0;
            let defaultResult3 = closure_0.default(defaultResult1, NumberResult);
            defaultResult1 = defaultResult3;
            time2 = defaultResult3.getTime();
          } while (time2 <= time1);
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
  const defaultResult2 = closure_1.default(obj.end);
};
export default exports.default;

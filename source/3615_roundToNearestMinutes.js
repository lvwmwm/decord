// Module ID: 3615
// Function ID: 27847
// Name: roundToNearestMinutes
// Dependencies: []
// Exports: default

// Module 3615 (roundToNearestMinutes)
let closure_2 = _interopRequireDefault(require(dependencyMap[0]));
let closure_3 = _interopRequireDefault(require(dependencyMap[1]));

export default function roundToNearestMinutes(defaultResult1, nearestTo) {
  if (arguments.length < 1) {
    const _TypeError = TypeError;
    const typeError = new TypeError("1 argument required, but only none provided present");
    throw typeError;
  } else {
    nearestTo = undefined;
    if (null != nearestTo) {
      nearestTo = nearestTo.nearestTo;
    }
    let num = 1;
    if (null !== nearestTo) {
      num = 1;
      if (undefined !== nearestTo) {
        num = nearestTo;
      }
    }
    const defaultResult = closure_3.default(num);
    if (defaultResult >= 1) {
      if (defaultResult <= 30) {
        defaultResult1 = closure_2.default(defaultResult1);
        const seconds = defaultResult1.getSeconds();
        const sum = defaultResult1.getMinutes() + seconds / 60;
        let roundingMethod;
        if (null != nearestTo) {
          roundingMethod = nearestTo.roundingMethod;
        }
        const _Math = Math;
        const result = require(dependencyMap[2]).getRoundingMethod(roundingMethod)(sum / defaultResult) * defaultResult;
        const _Date = Date;
        const result1 = Math.round(sum % defaultResult / defaultResult) * defaultResult;
        const fullYear = defaultResult1.getFullYear();
        const month = defaultResult1.getMonth();
        const date1 = new Date(fullYear, month, defaultResult1.getDate(), defaultResult1.getHours(), result + result1);
        return date1;
      }
    }
    const _RangeError = RangeError;
    const rangeError = new RangeError("`options.nearestTo` must be between 1 and 30");
    throw rangeError;
  }
};
export default exports.default;

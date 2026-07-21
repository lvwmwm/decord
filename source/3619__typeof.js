// Module ID: 3619
// Function ID: 27856
// Name: _typeof
// Dependencies: []
// Exports: default

// Module 3619 (_typeof)
function _typeof(arg0) {
  if ("function" === typeof Symbol) {
    const _Symbol = Symbol;
    if ("symbol" === typeof Symbol.iterator) {
      function _typeof(arg0) {
        return typeof arg0;
      }
    }
    return _typeof(arg0);
  }
  _typeof = function _typeof(arg0) {
    if (arg0) {
      const _Symbol = Symbol;
      if ("function" === typeof Symbol) {
        const _Symbol2 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol3 = Symbol;
          let str2 = "symbol";
        }
        return str2;
      }
    }
    str2 = typeof arg0;
  };
}
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = _interopRequireDefault(require(dependencyMap[3]));

export default function set(defaultResult1, year) {
  closure_3.default(2, arguments);
  if ("object" === _typeof(year)) {
    if (null !== year) {
      defaultResult1 = closure_0.default(defaultResult1);
      const _isNaN = isNaN;
      if (isNaN(defaultResult1.getTime())) {
        const _Date = Date;
        const _NaN = NaN;
        const date = new Date(NaN);
        return date;
      } else {
        if (null != year.year) {
          defaultResult1.setFullYear(year.year);
        }
        let defaultResult2 = defaultResult1;
        if (null != year.month) {
          defaultResult2 = closure_1.default(defaultResult1, year.month);
        }
        if (null != year.date) {
          defaultResult2.setDate(closure_2.default(year.date));
        }
        if (null != year.hours) {
          defaultResult2.setHours(closure_2.default(year.hours));
        }
        if (null != year.minutes) {
          defaultResult2.setMinutes(closure_2.default(year.minutes));
        }
        if (null != year.seconds) {
          defaultResult2.setSeconds(closure_2.default(year.seconds));
        }
        if (null != year.milliseconds) {
          defaultResult2.setMilliseconds(closure_2.default(year.milliseconds));
        }
        return defaultResult2;
      }
    }
  }
  const rangeError = new RangeError("values parameter must be an object");
  throw rangeError;
};
export default exports.default;

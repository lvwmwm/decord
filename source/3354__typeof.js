// Module ID: 3354
// Function ID: 26441
// Name: _typeof
// Dependencies: []
// Exports: default

// Module 3354 (_typeof)
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
let closure_4 = _interopRequireDefault(require(dependencyMap[4]));

export default function add(defaultResult1, years) {
  closure_3.default(2, arguments);
  if (years) {
    if ("object" === _typeof(years)) {
      let num = 0;
      if (years.years) {
        num = closure_4.default(years.years);
      }
      let num2 = 0;
      if (years.months) {
        num2 = closure_4.default(years.months);
      }
      let num3 = 0;
      if (years.weeks) {
        num3 = closure_4.default(years.weeks);
      }
      let num4 = 0;
      if (years.days) {
        num4 = closure_4.default(years.days);
      }
      let num5 = 0;
      if (years.hours) {
        num5 = closure_4.default(years.hours);
      }
      let num6 = 0;
      if (years.minutes) {
        num6 = closure_4.default(years.minutes);
      }
      let num7 = 0;
      if (years.seconds) {
        num7 = closure_4.default(years.seconds);
      }
      defaultResult1 = closure_2.default(defaultResult1);
      if (num2) {
        let defaultResult2 = closure_1.default(defaultResult1, num2 + 12 * num);
      } else {
        defaultResult2 = defaultResult1;
      }
      if (num4) {
        let defaultResult3 = closure_0.default(defaultResult2, num4 + 7 * num3);
      } else {
        defaultResult3 = defaultResult2;
      }
      const _Date = Date;
      const sum = num7 + 60 * (num6 + 60 * num5);
      const date = new Date(defaultResult3.getTime() + 1000 * sum);
      return date;
    }
  }
  return new Date(NaN);
};
export default exports.default;

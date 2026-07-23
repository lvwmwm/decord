// Module ID: 3356
// Function ID: 26446
// Name: _typeof
// Dependencies: [3357, 3358, 3209, 3210, 3213]
// Exports: default

// Module 3356 (_typeof)
import addDays from "addDays";
import addMonths from "addMonths";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";

function _typeof(arg0) {
  if ("function" === typeof Symbol) {
    let _Symbol = Symbol;
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

export default function add(defaultResult1, years) {
  requiredArgs.default(2, arguments);
  if (years) {
    if ("object" === _typeof(years)) {
      let num = 0;
      if (years.years) {
        num = toInteger.default(years.years);
      }
      let num2 = 0;
      if (years.months) {
        num2 = toInteger.default(years.months);
      }
      let num3 = 0;
      if (years.weeks) {
        num3 = toInteger.default(years.weeks);
      }
      let num4 = 0;
      if (years.days) {
        num4 = toInteger.default(years.days);
      }
      let num5 = 0;
      if (years.hours) {
        num5 = toInteger.default(years.hours);
      }
      let num6 = 0;
      if (years.minutes) {
        num6 = toInteger.default(years.minutes);
      }
      let num7 = 0;
      if (years.seconds) {
        num7 = toInteger.default(years.seconds);
      }
      defaultResult1 = _typeof.default(defaultResult1);
      if (num2) {
        let defaultResult2 = addMonths.default(defaultResult1, num2 + 12 * num);
      } else {
        defaultResult2 = defaultResult1;
      }
      if (num4) {
        let defaultResult3 = addDays.default(defaultResult2, num4 + 7 * num3);
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

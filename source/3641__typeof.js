// Module ID: 3641
// Function ID: 27920
// Name: _typeof
// Dependencies: [3580, 3642, 3210, 3213]
// Exports: default

// Module 3641 (_typeof)
import subDays from "subDays";
import subMonths from "subMonths";
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

export default function sub(defaultResult1, years) {
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
      const _Date = Date;
      const sum = num7 + 60 * (num6 + 60 * num5);
      const date = new Date(subDays.default(subMonths.default(defaultResult1, num2 + 12 * num), num4 + 7 * num3).getTime() - 1000 * sum);
      return date;
    }
  }
  return new Date(NaN);
};
export default exports.default;

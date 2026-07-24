// Module ID: 3621
// Function ID: 27862
// Name: _typeof
// Dependencies: [3209, 3622, 3213, 3210]
// Exports: default

// Module 3621 (_typeof)
import _typeof from "_typeof";
import setMonth from "setMonth";
import toInteger from "toInteger";
import requiredArgs from "requiredArgs";

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

export default function set(defaultResult1, year) {
  requiredArgs.default(2, arguments);
  if ("object" === _typeof(year)) {
    if (null !== year) {
      defaultResult1 = _typeof.default(defaultResult1);
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
          defaultResult2 = setMonth.default(defaultResult1, year.month);
        }
        if (null != year.date) {
          defaultResult2.setDate(toInteger.default(year.date));
        }
        if (null != year.hours) {
          defaultResult2.setHours(toInteger.default(year.hours));
        }
        if (null != year.minutes) {
          defaultResult2.setMinutes(toInteger.default(year.minutes));
        }
        if (null != year.seconds) {
          defaultResult2.setSeconds(toInteger.default(year.seconds));
        }
        if (null != year.milliseconds) {
          defaultResult2.setMilliseconds(toInteger.default(year.milliseconds));
        }
        return defaultResult2;
      }
    }
  }
  const rangeError = new RangeError("values parameter must be an object");
  throw rangeError;
};
export default exports.default;

// Module ID: 3380
// Function ID: 26520
// Name: _typeof
// Dependencies: [3366, 3370]
// Exports: default

// Module 3380 (_typeof)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";

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

export default function min(arg0) {
  getTimezoneOffsetInMilliseconds.default(1, arguments);
  if (!arg0) {
    if ("object" === _typeof(arg0)) {
      if (null !== arg0) {
        const _Array = Array;
        let callResult = slice.call(arg0);
      }
    }
    const _Date = Date;
    const _NaN = NaN;
    const date = new Date(NaN);
    return date;
  } else {
    callResult = arg0;
  }
  const item = callResult.forEach((defaultResult1) => {
    const defaultResult = defaultResult.default(defaultResult1);
    let isNaNResult = undefined === defaultResult;
    if (!isNaNResult) {
      isNaNResult = defaultResult > defaultResult;
    }
    if (!isNaNResult) {
      const _isNaN = isNaN;
      isNaNResult = isNaN(defaultResult.getDate());
    }
  });
  let date1 = startOfWeek;
  if (!startOfWeek) {
    const _Date2 = Date;
    const _NaN2 = NaN;
    date1 = new Date(NaN);
  }
  return date1;
};
export default exports.default;

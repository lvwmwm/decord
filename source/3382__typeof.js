// Module ID: 3382
// Function ID: 26530
// Name: _typeof
// Dependencies: [3209, 3210]
// Exports: default

// Module 3382 (_typeof)
import _typeof from "_typeof";
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

export default function min(arg0) {
  requiredArgs.default(1, arguments);
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
    const defaultResult = outer1_0.default(defaultResult1);
    let isNaNResult = undefined === closure_0;
    if (!isNaNResult) {
      isNaNResult = closure_0 > defaultResult;
    }
    if (!isNaNResult) {
      const _isNaN = isNaN;
      isNaNResult = isNaN(defaultResult.getDate());
    }
    if (isNaNResult) {
      closure_0 = defaultResult;
    }
  });
  let date1 = _typeof;
  if (!_typeof) {
    const _Date2 = Date;
    const _NaN2 = NaN;
    date1 = new Date(NaN);
  }
  return date1;
};
export default exports.default;

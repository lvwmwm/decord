// Module ID: 3392
// Function ID: 26564
// Name: _typeof
// Dependencies: [3210]
// Exports: default

// Module 3392 (_typeof)
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
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_0 = tmp3;

export default function isDate(arg0) {
  tmp3.default(1, arguments);
  let tmp2 = arg0 instanceof Date;
  if (!tmp2) {
    let tmp4 = "object" === _typeof(arg0);
    if (tmp4) {
      const _Object = Object;
      tmp4 = "[object Date]" === toString.call(arg0);
    }
    tmp2 = tmp4;
    tmp3 = _typeof;
  }
  return tmp2;
};
export default exports.default;

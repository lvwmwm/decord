// Module ID: 3390
// Function ID: 26553
// Name: _typeof
// Dependencies: []
// Exports: default

// Module 3390 (_typeof)
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
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

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
    const tmp3 = _typeof;
  }
  return tmp2;
};
export default exports.default;

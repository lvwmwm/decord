// Module ID: 3207
// Function ID: 25810
// Name: _typeof
// Dependencies: []
// Exports: default

// Module 3207 (_typeof)
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

export default function toDate(getTime) {
  tmp3.default(1, arguments);
  const callResult = toString.call(getTime);
  if (!(getTime instanceof Date)) {
    if ("object" === _typeof(getTime)) {
      return date;
    }
    if ("number" !== typeof getTime) {
      if ("[object Number]" !== callResult) {
        let tmp5 = "string" !== tmp4;
        if (tmp5) {
          tmp5 = "[object String]" !== callResult;
        }
        if (!tmp5) {
          const _console = console;
          tmp5 = "undefined" === typeof console;
        }
        if (!tmp5) {
          const _console2 = console;
          console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
          const _console3 = console;
          const _Error = Error;
          const error = new Error();
          console.warn(error.stack);
        }
        const _Date = Date;
        const _NaN = NaN;
        let date = new Date(NaN);
      }
    }
    const _Date2 = Date;
    date = new Date(getTime);
    const tmp3 = _typeof;
  }
  date = new Date(getTime.getTime());
};
export default exports.default;

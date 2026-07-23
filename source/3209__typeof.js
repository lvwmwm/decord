// Module ID: 3209
// Function ID: 25820
// Name: _typeof
// Dependencies: [3210]
// Exports: default

// Module 3209 (_typeof)
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
        date = new Date(NaN);
      }
    }
    const _Date2 = Date;
    date = new Date(getTime);
    tmp3 = _typeof;
  }
  date = new Date(getTime.getTime());
};
export default exports.default;

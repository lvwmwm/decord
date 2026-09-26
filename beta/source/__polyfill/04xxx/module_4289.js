// Module ID: 4289
// Function ID: 4290
// Dependencies: [3877, 4290, 3881, 3878]
// Exports: default

// Module 4289
import _typeof_mod from "module_3877" /* 3877 */;
import module_4290_mod from "module_4290" /* 4290 */;
import module_3881_mod from "module_3881" /* 3881 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

function _typeof(arg0) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(arg0) {
        return typeof arg0;
      };
    }
    return _typeof(arg0);
  }
  _typeof = function _typeof(arg0) {
    if (arg0) {
      const _Symbol = Symbol;
      if (typeof Symbol === "function") {
        const _Symbol3 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol2 = Symbol;
          let str = "symbol";
        }
        return str;
      }
    }
    str = typeof arg0;
  };
}
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_4290 = module_4290_mod;
if (!module_4290) {
  const obj2 = { default: module_4290 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4290;
}
module_4290 = tmp5;
let module_3881 = module_3881_mod;
if (!module_3881) {
  const obj3 = { default: module_3881 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3881;
}
module_3881 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function set(arg0, year) {
  requiredArgs.default(2, arguments);
  if ("object" === _typeof(year)) {
    if (null !== year) {
      const defaultResult1 = _typeof.default(arg0);
      const _isNaN = isNaN;
      if (isNaN(defaultResult1.getTime())) {
        const _Date = Date;
        const date = new Date(NaN);
        return date;
      } else {
        if (null != year.year) {
          defaultResult1.setFullYear(year.year);
        }
        let defaultResult2 = defaultResult1;
        if (null != year.month) {
          defaultResult2 = module_4290.default(defaultResult1, year.month);
        }
        if (null != year.date) {
          defaultResult2.setDate(module_3881.default(year.date));
        }
        if (null != year.hours) {
          defaultResult2.setHours(module_3881.default(year.hours));
        }
        if (null != year.minutes) {
          defaultResult2.setMinutes(module_3881.default(year.minutes));
        }
        if (null != year.seconds) {
          defaultResult2.setSeconds(module_3881.default(year.seconds));
        }
        if (null != year.milliseconds) {
          defaultResult2.setMilliseconds(module_3881.default(year.milliseconds));
        }
        return defaultResult2;
      }
    }
  }
  const rangeError = new RangeError("values parameter must be an object");
  throw rangeError;
};
export default exports.default;

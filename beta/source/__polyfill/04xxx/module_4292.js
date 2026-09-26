// Module ID: 4292
// Function ID: 4293
// Dependencies: [4025, 3877, 3881, 3878, 3882]
// Exports: default

// Module 4292
import _mod3882 from "module_3882" /* 3882 */;
import module_4025_mod from "module_4025" /* 4025 */;
import _typeof_mod from "module_3877" /* 3877 */;
import module_3881_mod from "module_3881" /* 3881 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_4025 = module_4025_mod;
if (!module_4025) {
  const obj = { default: module_4025 };
  let tmp3 = obj;
} else {
  tmp3 = module_4025;
}
module_4025 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
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

export default function setDay(arg0, arg1, weekStartsOn) {
  requiredArgs.default(2, arguments);
  const defaultOptions = _mod3882.getDefaultOptions();
  weekStartsOn = undefined;
  if (null != weekStartsOn) {
    weekStartsOn = weekStartsOn.weekStartsOn;
  }
  if (null === weekStartsOn) {
    let weekStartsOn1;
    if (null != weekStartsOn) {
      locale = weekStartsOn.locale;
      if (null !== locale) {
        if (undefined !== locale) {
          const options = locale.options;
          if (null !== options) {
            if (undefined !== options) {
              weekStartsOn1 = options.weekStartsOn;
            }
          }
        }
      }
    }
    weekStartsOn = weekStartsOn1;
  }
  if (null === weekStartsOn) {
    weekStartsOn = defaultOptions.weekStartsOn;
  }
  if (null === weekStartsOn) {
    const locale2 = defaultOptions.locale;
    let weekStartsOn2;
    if (null !== locale2) {
      if (undefined !== locale2) {
        const options2 = locale2.options;
        if (null !== options2) {
          if (undefined !== options2) {
            weekStartsOn2 = options2.weekStartsOn;
          }
        }
      }
    }
    weekStartsOn = weekStartsOn2;
  }
  let num = 0;
  if (null !== weekStartsOn) {
    num = 0;
    if (undefined !== weekStartsOn) {
      num = weekStartsOn;
    }
  }
  const defaultResult1 = module_3881.default(num);
  if (defaultResult1 >= 0) {
    if (defaultResult1 <= 6) {
      const defaultResult2 = _typeof.default(arg0);
      const defaultResult3 = module_3881.default(arg1);
      const day = defaultResult2.getDay();
      const diff = 7 - defaultResult1;
      if (defaultResult3 >= 0) {
        if (defaultResult3 <= 6) {
          let diff1 = ((defaultResult3 % 7 + 7) % 7 + diff) % 7 - (day + diff) % 7;
        }
        return module_4025.default(defaultResult2, diff1);
      }
      diff1 = defaultResult3 - (day + diff) % 7;
    }
  }
  const rangeError = new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  throw rangeError;
};
export default exports.default;

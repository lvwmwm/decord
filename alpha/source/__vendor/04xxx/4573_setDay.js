// Module ID: 4573
// Function ID: 4574
// Name: setDay
// Dependencies: [4306, 4158, 4162, 4159, 4163]
// Exports: default

// Module 4573 (setDay)
import _mod4163 from "module_4163" /* 4163 */;
import addDays_mod from "addDays" /* 4306 */;
import toDate_mod from "toDate" /* 4158 */;
import toInteger_mod from "toInteger" /* 4162 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let addDays = addDays_mod;
if (!addDays) {
  let obj = { default: addDays };
  tmp3 = obj;
} else {
  tmp3 = addDays;
}
addDays = tmp3;
let toDate = toDate_mod;
if (!toDate) {
  tmp5 = { default: toDate };
  const obj2 = { default: toDate };
} else {
  tmp5 = toDate;
}
toDate = tmp5;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp7 = { default: toInteger };
  const obj3 = { default: toInteger };
} else {
  tmp7 = toInteger;
}
toInteger = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setDay(arg0, arg1, weekStartsOn) {
  requiredArgs.default(2, arguments);
  const defaultOptions = _mod4163.getDefaultOptions();
  weekStartsOn = undefined;
  const _default = toInteger.default;
  const obj = toInteger;
  if (null != weekStartsOn) {
    weekStartsOn = weekStartsOn.weekStartsOn;
  }
  if (null === weekStartsOn) {
    let weekStartsOn1;
    if (null != weekStartsOn) {
      const locale = weekStartsOn.locale;
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
  const _defaultResult = _default(num);
  if (_defaultResult >= 0) {
    if (_defaultResult <= 6) {
      const defaultResult1 = toDate.default(arg0);
      const defaultResult2 = obj.default(arg1);
      const day = defaultResult1.getDay();
      const diff = 7 - _defaultResult;
      if (defaultResult2 >= 0) {
        let diff1;
        if (defaultResult2 <= 6) {
          diff1 = ((defaultResult2 % 7 + 7) % 7 + diff) % 7 - (day + diff) % 7;
        }
        return addDays.default(defaultResult1, diff1);
      }
      diff1 = defaultResult2 - (day + diff) % 7;
    }
  }
  const rangeError = new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  throw rangeError;
};

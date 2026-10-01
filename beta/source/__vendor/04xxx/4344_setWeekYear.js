// Module ID: 4344
// Function ID: 4345
// Name: setWeekYear
// Dependencies: [4080, 4200, 3918, 3922, 3919, 3923]
// Exports: default

// Module 4344 (setWeekYear)
import _mod3923 from "module_3923" /* 3923 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4080 */;
import startOfWeekYear_mod from "startOfWeekYear" /* 4200 */;
import toDate_mod from "toDate" /* 3918 */;
import toInteger_mod from "toInteger" /* 3922 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let tmp11;
let tmp3;
let tmp5;
let tmp7;
let tmp9;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  let obj = { default: differenceInCalendarDays };
  tmp3 = obj;
} else {
  tmp3 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp3;
let startOfWeekYear = startOfWeekYear_mod;
if (!startOfWeekYear) {
  tmp5 = { default: startOfWeekYear };
  const obj2 = { default: startOfWeekYear };
} else {
  tmp5 = startOfWeekYear;
}
startOfWeekYear = tmp5;
let toDate = toDate_mod;
if (!toDate) {
  tmp7 = { default: toDate };
  const obj3 = { default: toDate };
} else {
  tmp7 = toDate;
}
toDate = tmp7;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp9 = { default: toInteger };
  const obj4 = { default: toInteger };
} else {
  tmp9 = toInteger;
}
toInteger = tmp9;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp11 = { default: requiredArgs };
  const obj5 = { default: requiredArgs };
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setWeekYear(arg0, arg1, firstWeekContainsDate) {
  requiredArgs.default(2, arguments);
  const defaultOptions = _mod3923.getDefaultOptions();
  let prop;
  const _default = toInteger.default;
  const obj = toInteger;
  if (null != firstWeekContainsDate) {
    prop = firstWeekContainsDate.firstWeekContainsDate;
  }
  if (null === prop) {
    let prop1;
    if (null != firstWeekContainsDate) {
      const locale = firstWeekContainsDate.locale;
      if (null !== locale) {
        if (undefined !== locale) {
          const options = locale.options;
          if (null !== options) {
            if (undefined !== options) {
              prop1 = options.firstWeekContainsDate;
            }
          }
        }
      }
    }
    prop = prop1;
  }
  if (null === prop) {
    prop = defaultOptions.firstWeekContainsDate;
  }
  if (null === prop) {
    const locale2 = defaultOptions.locale;
    let prop2;
    if (null !== locale2) {
      if (undefined !== locale2) {
        const options2 = locale2.options;
        if (null !== options2) {
          if (undefined !== options2) {
            prop2 = options2.firstWeekContainsDate;
          }
        }
      }
    }
    prop = prop2;
  }
  let num = 1;
  if (null !== prop) {
    num = 1;
    if (undefined !== prop) {
      num = prop;
    }
  }
  const _defaultResult = _default(num);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = obj.default(arg1);
  const defaultResult3 = differenceInCalendarDays.default(defaultResult1, startOfWeekYear.default(defaultResult1, firstWeekContainsDate));
  const date = new Date(0);
  date.setFullYear(defaultResult2, 0, _defaultResult);
  date.setHours(0, 0, 0, 0);
  const defaultResult4 = startOfWeekYear.default(date, firstWeekContainsDate);
  defaultResult4.setDate(defaultResult4.getDate() + defaultResult3);
  return defaultResult4;
};

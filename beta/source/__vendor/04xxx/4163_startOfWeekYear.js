// Module ID: 4163
// Function ID: 4164
// Name: startOfWeekYear
// Dependencies: [4164, 4040, 3885, 3882, 3886]
// Exports: default

// Module 4163 (startOfWeekYear)
import _mod3886 from "module_3886" /* 3886 */;
import module_4164_mod from "module_4164" /* 4164 */;
import startOfWeek_mod from "startOfWeek" /* 4040 */;
import module_3885_mod from "module_3885" /* 3885 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_4164 = module_4164_mod;
if (!module_4164) {
  const obj = { default: module_4164 };
  let tmp3 = obj;
} else {
  tmp3 = module_4164;
}
module_4164 = tmp3;
let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  const obj2 = { default: startOfWeek };
  let tmp5 = obj2;
} else {
  tmp5 = startOfWeek;
}
startOfWeek = tmp5;
let module_3885 = module_3885_mod;
if (!module_3885) {
  const obj3 = { default: module_3885 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3885;
}
module_3885 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function startOfWeekYear(arg0, firstWeekContainsDate) {
  requiredArgs.default(1, arguments);
  const defaultOptions = _mod3886.getDefaultOptions();
  let prop;
  if (null != firstWeekContainsDate) {
    prop = firstWeekContainsDate.firstWeekContainsDate;
  }
  if (null === prop) {
    let prop1;
    if (null != firstWeekContainsDate) {
      locale = firstWeekContainsDate.locale;
      if (null !== locale) {
        if (undefined !== locale) {
          options = locale.options;
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
  const defaultResult1 = module_3885.default(num);
  const date = new Date(0);
  date.setFullYear(module_4164.default(arg0, firstWeekContainsDate), 0, defaultResult1);
  date.setHours(0, 0, 0, 0);
  return startOfWeek.default(date, firstWeekContainsDate);
};
export default exports.default;

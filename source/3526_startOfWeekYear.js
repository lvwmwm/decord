// Module ID: 3526
// Function ID: 27018
// Name: startOfWeekYear
// Dependencies: [3527, 3403, 3248, 3245, 3249]
// Exports: default

// Module 3526 (startOfWeekYear)
import getWeekYear from "getWeekYear";
import startOfWeek from "startOfWeek";
import toInteger from "toInteger";
import requiredArgs from "requiredArgs";


export default function startOfWeekYear(defaultResult1, firstWeekContainsDate) {
  requiredArgs.default(1, arguments);
  const defaultOptions = require(3249) /* getDefaultOptions */.getDefaultOptions();
  let prop;
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
  defaultResult1 = toInteger.default(num);
  const date = new Date(0);
  date.setFullYear(getWeekYear.default(defaultResult1, firstWeekContainsDate), 0, defaultResult1);
  date.setHours(0, 0, 0, 0);
  return startOfWeek.default(date, firstWeekContainsDate);
};
export default exports.default;

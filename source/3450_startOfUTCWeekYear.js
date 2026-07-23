// Module ID: 3450
// Function ID: 26774
// Name: startOfUTCWeekYear
// Dependencies: [3451, 3210, 3212, 3213, 3214]
// Exports: default

// Module 3450 (startOfUTCWeekYear)
import getUTCWeekYear from "getUTCWeekYear";
import requiredArgs from "requiredArgs";
import startOfUTCWeek from "startOfUTCWeek";
import toInteger from "toInteger";


export default function startOfUTCWeekYear(defaultResult1, firstWeekContainsDate) {
  requiredArgs.default(1, arguments);
  const defaultOptions = require(3214) /* getDefaultOptions */.getDefaultOptions();
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
  date.setUTCFullYear(getUTCWeekYear.default(defaultResult1, firstWeekContainsDate), 0, defaultResult1);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCWeek.default(date, firstWeekContainsDate);
};
export default exports.default;

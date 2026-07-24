// Module ID: 3493
// Function ID: 26910
// Name: getWeekOfMonth
// Dependencies: [3471, 3472, 3425, 3210, 3213, 3214]
// Exports: default

// Module 3493 (getWeekOfMonth)
import getDate from "getDate";
import getDay from "getDay";
import startOfMonth from "startOfMonth";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";


export default function getWeekOfMonth(defaultResult1, weekStartsOn) {
  requiredArgs.default(1, arguments);
  const defaultOptions = require(3214) /* getDefaultOptions */.getDefaultOptions();
  weekStartsOn = undefined;
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
  defaultResult1 = toInteger.default(num);
  if (defaultResult1 >= 0) {
    if (defaultResult1 <= 6) {
      const defaultResult2 = getDate.default(defaultResult1);
      const _isNaN = isNaN;
      if (isNaN(defaultResult2)) {
        const _NaN = NaN;
        return NaN;
      } else {
        const diff = defaultResult1 - getDay.default(startOfMonth.default(defaultResult1));
        let sum = diff;
        if (diff <= 0) {
          sum = diff + 7;
        }
        const _Math = Math;
        return Math.ceil((defaultResult2 - sum) / 7) + 1;
      }
    }
  }
  const rangeError = new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  throw rangeError;
};
export default exports.default;

// Module ID: 3624
// Function ID: 27874
// Name: setDay
// Dependencies: [3357, 3209, 3213, 3210, 3214]
// Exports: default

// Module 3624 (setDay)
import addDays from "addDays";
import _typeof from "_typeof";
import toInteger from "toInteger";
import requiredArgs from "requiredArgs";


export default function setDay(defaultResult1, defaultResult1, weekStartsOn) {
  requiredArgs.default(2, arguments);
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
      const defaultResult2 = _typeof.default(defaultResult1);
      const defaultResult3 = toInteger.default(defaultResult1);
      const day = defaultResult2.getDay();
      const diff = 7 - defaultResult1;
      if (defaultResult3 >= 0) {
        if (defaultResult3 <= 6) {
          let diff1 = ((tmp14 + 7) % 7 + diff) % 7 - (day + diff) % 7;
        }
        return addDays.default(defaultResult2, diff1);
      }
      diff1 = defaultResult3 - (day + diff) % 7;
    }
  }
  const rangeError = new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  throw rangeError;
};
export default exports.default;

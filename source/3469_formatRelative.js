// Module ID: 3469
// Function ID: 26839
// Name: formatRelative
// Dependencies: [3371, 3441, 3455, 3442, 3209, 3372, 3210, 3213, 3214]
// Exports: default

// Module 3469 (formatRelative)
import differenceInCalendarDays from "differenceInCalendarDays";
import format from "format";
import module_3455 from "module_3455";
import subMilliseconds from "subMilliseconds";
import _typeof from "_typeof";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";


export default function formatRelative(defaultResult1, defaultResult1, locale) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const defaultResult2 = _typeof.default(defaultResult1);
  const defaultOptions = require(3214) /* getDefaultOptions */.getDefaultOptions();
  locale = undefined;
  if (null != locale) {
    locale = locale.locale;
  }
  if (null === locale) {
    locale = defaultOptions.locale;
  }
  if (null === locale) {
    locale = module_3455.default;
  }
  let weekStartsOn;
  if (null != locale) {
    weekStartsOn = locale.weekStartsOn;
  }
  if (null === weekStartsOn) {
    let weekStartsOn1;
    if (null != locale) {
      locale = locale.locale;
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
  const defaultResult3 = toInteger.default(num);
  if (locale.localize) {
    if (locale.formatLong) {
      if (locale.formatRelative) {
        const defaultResult4 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
        const _isNaN = isNaN;
        if (isNaN(defaultResult4)) {
          const _RangeError4 = RangeError;
          const rangeError = new RangeError("Invalid time value");
          throw rangeError;
        } else {
          let str4 = "other";
          let str5 = "other";
          if (defaultResult4 >= -6) {
            let str6 = "lastWeek";
            if (defaultResult4 >= -1) {
              let str7 = "yesterday";
              if (defaultResult4 >= 0) {
                let str8 = "today";
                if (defaultResult4 >= 1) {
                  let str9 = "tomorrow";
                  if (defaultResult4 >= 2) {
                    if (defaultResult4 < 7) {
                      str4 = "nextWeek";
                    }
                    str9 = str4;
                  }
                  str8 = str9;
                }
                str7 = str8;
              }
              str6 = str7;
            }
            str5 = str6;
          }
          const defaultResult5 = subMilliseconds.default(defaultResult1, getTimezoneOffsetInMilliseconds.default(defaultResult1));
          let obj = { locale, weekStartsOn: defaultResult3 };
          obj = { locale, weekStartsOn: defaultResult3 };
          return format.default(defaultResult1, locale.formatRelative(str5, defaultResult5, subMilliseconds.default(defaultResult2, getTimezoneOffsetInMilliseconds.default(defaultResult2)), obj), obj);
        }
      } else {
        const _RangeError3 = RangeError;
        const rangeError1 = new RangeError("locale must contain formatRelative property");
        throw rangeError1;
      }
    } else {
      const _RangeError2 = RangeError;
      const rangeError2 = new RangeError("locale must contain formatLong property");
      throw rangeError2;
    }
  } else {
    const _RangeError = RangeError;
    const rangeError3 = new RangeError("locale must contain localize property");
    throw rangeError3;
  }
};
export default exports.default;

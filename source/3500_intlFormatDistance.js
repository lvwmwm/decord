// Module ID: 3500
// Function ID: 26927
// Name: intlFormatDistance
// Dependencies: []
// Exports: default

// Module 3500 (intlFormatDistance)
let closure_2 = _interopRequireDefault(require(dependencyMap[0]));
let closure_3 = _interopRequireDefault(require(dependencyMap[1]));
let closure_4 = _interopRequireDefault(require(dependencyMap[2]));
let closure_5 = _interopRequireDefault(require(dependencyMap[3]));
let closure_6 = _interopRequireDefault(require(dependencyMap[4]));
let closure_7 = _interopRequireDefault(require(dependencyMap[5]));
let closure_8 = _interopRequireDefault(require(dependencyMap[6]));
let closure_9 = _interopRequireDefault(require(dependencyMap[7]));
let closure_10 = _interopRequireDefault(require(dependencyMap[8]));
let closure_11 = _interopRequireDefault(require(dependencyMap[9]));

export default function intlFormatDistance(defaultResult1, defaultResult1, unit) {
  closure_11.default(2, arguments);
  defaultResult1 = closure_10.default(defaultResult1);
  const defaultResult2 = closure_10.default(defaultResult1);
  if (null != unit) {
    if (unit.unit) {
      unit = undefined;
      if (null != unit) {
        unit = unit.unit;
      }
      if ("second" === unit) {
        let num2 = closure_9.default(defaultResult1, defaultResult2);
        let str = unit;
      } else if ("minute" === unit) {
        num2 = closure_8.default(defaultResult1, defaultResult2);
        str = unit;
      } else if ("hour" === unit) {
        num2 = closure_7.default(defaultResult1, defaultResult2);
        str = unit;
      } else if ("day" === unit) {
        num2 = closure_2.default(defaultResult1, defaultResult2);
        str = unit;
      } else if ("week" === unit) {
        num2 = closure_5.default(defaultResult1, defaultResult2);
        str = unit;
      } else if ("month" === unit) {
        num2 = closure_3.default(defaultResult1, defaultResult2);
        str = unit;
      } else if ("quarter" === unit) {
        num2 = closure_4.default(defaultResult1, defaultResult2);
        str = unit;
      } else {
        num2 = 0;
        str = unit;
        if ("year" === unit) {
          num2 = closure_6.default(defaultResult1, defaultResult2);
          str = unit;
        }
      }
    }
    const _Intl = Intl;
    let locale;
    if (null != unit) {
      locale = unit.locale;
    }
    const obj = {};
    let localeMatcher;
    if (null != unit) {
      localeMatcher = unit.localeMatcher;
    }
    obj.localeMatcher = localeMatcher;
    let str6;
    if (null != unit) {
      str6 = unit.numeric;
    }
    if (!str6) {
      str6 = "auto";
    }
    obj.numeric = str6;
    let style;
    if (null != unit) {
      style = unit.style;
    }
    obj.style = style;
    const prototype = RelativeTimeFormat.prototype;
    const relativeTimeFormat = new RelativeTimeFormat(locale, obj);
    return relativeTimeFormat.format(num2, str);
  }
  const defaultResult3 = closure_9.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(defaultResult3);
  if (absolute < require(dependencyMap[10]).secondsInMinute) {
    num2 = closure_9.default(defaultResult1, defaultResult2);
    str = "second";
  } else {
    const _Math6 = Math;
    const absolute1 = Math.abs(defaultResult3);
    if (absolute1 < require(dependencyMap[10]).secondsInHour) {
      num2 = closure_8.default(defaultResult1, defaultResult2);
      str = "minute";
    } else {
      const _Math7 = Math;
      const absolute2 = Math.abs(defaultResult3);
      if (absolute2 < require(dependencyMap[10]).secondsInDay) {
        const _Math = Math;
        if (Math.abs(closure_2.default(defaultResult1, defaultResult2)) < 1) {
          num2 = closure_7.default(defaultResult1, defaultResult2);
          str = "hour";
        }
      }
      const _Math2 = Math;
      const absolute3 = Math.abs(defaultResult3);
      if (absolute3 < require(dependencyMap[10]).secondsInWeek) {
        num2 = closure_2.default(defaultResult1, defaultResult2);
        if (num2) {
          const _Math3 = Math;
          str = "day";
        }
      }
      const _Math4 = Math;
      const absolute4 = Math.abs(defaultResult3);
      if (absolute4 < require(dependencyMap[10]).secondsInMonth) {
        num2 = closure_5.default(defaultResult1, defaultResult2);
        str = "week";
      } else {
        const _Math8 = Math;
        const absolute5 = Math.abs(defaultResult3);
        if (absolute5 < require(dependencyMap[10]).secondsInQuarter) {
          num2 = closure_3.default(defaultResult1, defaultResult2);
          str = "month";
        } else {
          const _Math5 = Math;
          const absolute6 = Math.abs(defaultResult3);
          if (absolute6 < require(dependencyMap[10]).secondsInYear) {
            if (closure_4.default(defaultResult1, defaultResult2) < 4) {
              num2 = closure_4.default(defaultResult1, defaultResult2);
              str = "quarter";
            }
          }
          num2 = closure_6.default(defaultResult1, defaultResult2);
          str = "year";
        }
      }
    }
  }
};
export default exports.default;

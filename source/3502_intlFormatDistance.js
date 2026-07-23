// Module ID: 3502
// Function ID: 26932
// Name: intlFormatDistance
// Dependencies: [3371, 3395, 3396, 3398, 3399, 3401, 3406, 3412, 3209, 3210, 3388]
// Exports: default

// Module 3502 (intlFormatDistance)
import differenceInCalendarDays from "differenceInCalendarDays";
import differenceInCalendarMonths from "differenceInCalendarMonths";
import differenceInCalendarQuarters from "differenceInCalendarQuarters";
import differenceInCalendarWeeks from "differenceInCalendarWeeks";
import differenceInCalendarYears from "differenceInCalendarYears";
import differenceInHours from "differenceInHours";
import differenceInMinutes from "differenceInMinutes";
import differenceInSeconds from "differenceInSeconds";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function intlFormatDistance(defaultResult1, defaultResult1, unit) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const defaultResult2 = _typeof.default(defaultResult1);
  if (null != unit) {
    if (unit.unit) {
      unit = undefined;
      if (null != unit) {
        unit = unit.unit;
      }
      if ("second" === unit) {
        let num2 = differenceInSeconds.default(defaultResult1, defaultResult2);
        let str = unit;
      } else if ("minute" === unit) {
        num2 = differenceInMinutes.default(defaultResult1, defaultResult2);
        str = unit;
      } else if ("hour" === unit) {
        num2 = differenceInHours.default(defaultResult1, defaultResult2);
        str = unit;
      } else if ("day" === unit) {
        num2 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
        str = unit;
      } else if ("week" === unit) {
        num2 = differenceInCalendarWeeks.default(defaultResult1, defaultResult2);
        str = unit;
      } else if ("month" === unit) {
        num2 = differenceInCalendarMonths.default(defaultResult1, defaultResult2);
        str = unit;
      } else if ("quarter" === unit) {
        num2 = differenceInCalendarQuarters.default(defaultResult1, defaultResult2);
        str = unit;
      } else {
        num2 = 0;
        str = unit;
        if ("year" === unit) {
          num2 = differenceInCalendarYears.default(defaultResult1, defaultResult2);
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
  const defaultResult3 = differenceInSeconds.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(defaultResult3);
  if (absolute < require(3388) /* keys */.secondsInMinute) {
    num2 = differenceInSeconds.default(defaultResult1, defaultResult2);
    str = "second";
  } else {
    const _Math6 = Math;
    const absolute1 = Math.abs(defaultResult3);
    if (absolute1 < require(3388) /* keys */.secondsInHour) {
      num2 = differenceInMinutes.default(defaultResult1, defaultResult2);
      str = "minute";
    } else {
      const _Math7 = Math;
      const absolute2 = Math.abs(defaultResult3);
      if (absolute2 < require(3388) /* keys */.secondsInDay) {
        const _Math = Math;
        if (Math.abs(differenceInCalendarDays.default(defaultResult1, defaultResult2)) < 1) {
          num2 = differenceInHours.default(defaultResult1, defaultResult2);
          str = "hour";
        }
      }
      const _Math2 = Math;
      const absolute3 = Math.abs(defaultResult3);
      if (absolute3 < require(3388) /* keys */.secondsInWeek) {
        num2 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
        if (num2) {
          const _Math3 = Math;
          str = "day";
        }
      }
      const _Math4 = Math;
      const absolute4 = Math.abs(defaultResult3);
      if (absolute4 < require(3388) /* keys */.secondsInMonth) {
        num2 = differenceInCalendarWeeks.default(defaultResult1, defaultResult2);
        str = "week";
      } else {
        const _Math8 = Math;
        const absolute5 = Math.abs(defaultResult3);
        if (absolute5 < require(3388) /* keys */.secondsInQuarter) {
          num2 = differenceInCalendarMonths.default(defaultResult1, defaultResult2);
          str = "month";
        } else {
          const _Math5 = Math;
          const absolute6 = Math.abs(defaultResult3);
          if (absolute6 < require(3388) /* keys */.secondsInYear) {
            if (differenceInCalendarQuarters.default(defaultResult1, defaultResult2) < 4) {
              num2 = differenceInCalendarQuarters.default(defaultResult1, defaultResult2);
              str = "quarter";
            }
          }
          num2 = differenceInCalendarYears.default(defaultResult1, defaultResult2);
          str = "year";
        }
      }
    }
  }
};
export default exports.default;

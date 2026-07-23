// Module ID: 3460
// Function ID: 26808
// Name: formatDistanceStrict
// Dependencies: [3372, 3385, 3209, 3458, 3459, 3455, 3210, 3214]
// Exports: default

// Module 3460 (formatDistanceStrict)
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";
import compareAsc from "compareAsc";
import _typeof from "_typeof";
import cloneObject from "cloneObject";
import assign from "assign";
import module_3455 from "module_3455";
import requiredArgs from "requiredArgs";

let c9 = 60000;
let c10 = 1440;
let c11 = 43200;
let c12 = 525600;

export default function formatDistanceStrict(defaultResult1, defaultResult2, locale) {
  requiredArgs.default(2, arguments);
  locale = undefined;
  const defaultOptions = require(3214) /* getDefaultOptions */.getDefaultOptions();
  if (null != locale) {
    locale = locale.locale;
  }
  if (null === locale) {
    locale = defaultOptions.locale;
  }
  if (null === locale) {
    locale = module_3455.default;
  }
  if (locale.formatDistance) {
    defaultResult1 = compareAsc.default(defaultResult1, defaultResult2);
    const _isNaN = isNaN;
    if (isNaN(defaultResult1)) {
      const _RangeError4 = RangeError;
      const rangeError = new RangeError("Invalid time value");
      throw rangeError;
    } else {
      const obj = {};
      let addSuffix;
      if (null != locale) {
        addSuffix = locale.addSuffix;
      }
      obj.addSuffix = Boolean(addSuffix);
      obj.comparison = defaultResult1;
      const defaultResult3 = assign.default(cloneObject.default(locale), obj);
      if (defaultResult1 > 0) {
        let defaultResult4 = _typeof.default(defaultResult2);
        let defaultResult5 = _typeof.default(defaultResult1);
      } else {
        defaultResult4 = _typeof.default(defaultResult1);
        defaultResult5 = _typeof.default(defaultResult2);
      }
      let roundingMethod;
      if (null != locale) {
        roundingMethod = locale.roundingMethod;
      }
      let str3 = "round";
      if (null !== roundingMethod) {
        str3 = "round";
        if (undefined !== roundingMethod) {
          str3 = roundingMethod;
        }
      }
      const StringResult = String(str3);
      if ("floor" === StringResult) {
        const _Math3 = Math;
        let round = Math.floor;
      } else if ("ceil" === StringResult) {
        const _Math2 = Math;
        round = Math.ceil;
      } else if ("round" !== StringResult) {
        const _RangeError2 = RangeError;
        const rangeError1 = new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
        throw rangeError1;
      } else {
        const _Math = Math;
        round = Math.round;
      }
      const time = defaultResult5.getTime();
      const diff = time - defaultResult4.getTime();
      const result = diff / c9;
      defaultResult2 = cloneObject.default(locale);
      const result1 = (diff - (getTimezoneOffsetInMilliseconds.default(defaultResult5) - getTimezoneOffsetInMilliseconds.default(defaultResult4))) / c9;
      let unit;
      if (null != locale) {
        unit = locale.unit;
      }
      if (unit) {
        const _String = String;
        let str7 = String(unit);
      } else {
        str7 = "second";
        if (result >= 1) {
          let str8 = "minute";
          if (result >= 60) {
            let str9 = "hour";
            if (result >= c10) {
              let str10 = "day";
              if (result1 >= c11) {
                let str11 = "year";
                if (result1 < c12) {
                  str11 = "month";
                }
                str10 = str11;
              }
              str9 = str10;
            }
            str8 = str9;
          }
          str7 = str8;
        }
      }
      if ("second" === str7) {
        return locale.formatDistance("xSeconds", round(diff / 1000), defaultResult3);
      } else if ("minute" === str7) {
        return locale.formatDistance("xMinutes", round(result), defaultResult3);
      } else if ("hour" === str7) {
        return locale.formatDistance("xHours", round(result / 60), defaultResult3);
      } else if ("day" === str7) {
        return locale.formatDistance("xDays", round(result1 / c10), defaultResult3);
      } else if ("month" === str7) {
        const roundResult = round(result1 / c11);
        if (12 === roundResult) {
          if ("month" !== unit) {
            let formatDistanceResult = locale.formatDistance("xYears", 1, defaultResult3);
          }
          return formatDistanceResult;
        }
        formatDistanceResult = locale.formatDistance("xMonths", roundResult, defaultResult3);
      } else if ("year" === str7) {
        return locale.formatDistance("xYears", round(result1 / c12), defaultResult3);
      } else {
        const _RangeError3 = RangeError;
        const rangeError2 = new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
        throw rangeError2;
      }
      const defaultResult6 = getTimezoneOffsetInMilliseconds.default(defaultResult5);
    }
  } else {
    const _RangeError = RangeError;
    const rangeError3 = new RangeError("locale must contain localize.formatDistance property");
    throw rangeError3;
  }
};
export default exports.default;

// Module ID: 3458
// Function ID: 26798
// Name: formatDistanceStrict
// Dependencies: []
// Exports: default

// Module 3458 (formatDistanceStrict)
let closure_2 = _interopRequireDefault(require(dependencyMap[0]));
let closure_3 = _interopRequireDefault(require(dependencyMap[1]));
let closure_4 = _interopRequireDefault(require(dependencyMap[2]));
let closure_5 = _interopRequireDefault(require(dependencyMap[3]));
let closure_6 = _interopRequireDefault(require(dependencyMap[4]));
let closure_7 = _interopRequireDefault(require(dependencyMap[5]));
let closure_8 = _interopRequireDefault(require(dependencyMap[6]));
let closure_9 = 60000;
let closure_10 = 1440;
let closure_11 = 43200;
let closure_12 = 525600;

export default function formatDistanceStrict(defaultResult1, defaultResult2, locale) {
  closure_8.default(2, arguments);
  locale = undefined;
  const defaultOptions = require(dependencyMap[7]).getDefaultOptions();
  if (null != locale) {
    locale = locale.locale;
  }
  if (null === locale) {
    locale = defaultOptions.locale;
  }
  if (null === locale) {
    locale = mod.default;
  }
  if (locale.formatDistance) {
    defaultResult1 = closure_3.default(defaultResult1, defaultResult2);
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
      const defaultResult3 = closure_6.default(closure_5.default(locale), obj);
      if (defaultResult1 > 0) {
        let defaultResult4 = closure_4.default(defaultResult2);
        let defaultResult5 = closure_4.default(defaultResult1);
      } else {
        defaultResult4 = closure_4.default(defaultResult1);
        defaultResult5 = closure_4.default(defaultResult2);
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
      const result = diff / closure_9;
      defaultResult2 = closure_5.default(locale);
      const result1 = (diff - (closure_2.default(defaultResult5) - closure_2.default(defaultResult4))) / closure_9;
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
            if (result >= closure_10) {
              let str10 = "day";
              if (result1 >= closure_11) {
                let str11 = "year";
                if (result1 < closure_12) {
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
        return locale.formatDistance("xDays", round(result1 / closure_10), defaultResult3);
      } else if ("month" === str7) {
        const roundResult = round(result1 / closure_11);
        if (12 === roundResult) {
          if ("month" !== unit) {
            let formatDistanceResult = locale.formatDistance("xYears", 1, defaultResult3);
          }
          return formatDistanceResult;
        }
        formatDistanceResult = locale.formatDistance("xMonths", roundResult, defaultResult3);
      } else if ("year" === str7) {
        return locale.formatDistance("xYears", round(result1 / closure_12), defaultResult3);
      } else {
        const _RangeError3 = RangeError;
        const rangeError2 = new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
        throw rangeError2;
      }
      const defaultResult6 = closure_2.default(defaultResult5);
    }
  } else {
    const _RangeError = RangeError;
    const rangeError3 = new RangeError("locale must contain localize.formatDistance property");
    throw rangeError3;
  }
};
export default exports.default;

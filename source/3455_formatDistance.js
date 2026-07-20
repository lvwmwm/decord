// Module ID: 3455
// Function ID: 26791
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3455 (formatDistance)
let closure_2 = _interopRequireDefault(require(dependencyMap[0]));
let closure_3 = _interopRequireDefault(require(dependencyMap[1]));
let closure_4 = _interopRequireDefault(require(dependencyMap[2]));
let closure_5 = _interopRequireDefault(require(dependencyMap[3]));
let closure_6 = _interopRequireDefault(require(dependencyMap[4]));
let closure_7 = _interopRequireDefault(require(dependencyMap[5]));
let closure_8 = _interopRequireDefault(require(dependencyMap[6]));
let closure_9 = _interopRequireDefault(require(dependencyMap[7]));
let closure_10 = _interopRequireDefault(require(dependencyMap[8]));
let closure_11 = 1440;
let closure_12 = 2520;
let closure_13 = 43200;
let closure_14 = 86400;

export default function formatDistance(defaultResult1, defaultResult2, locale) {
  closure_10.default(2, arguments);
  locale = undefined;
  const defaultOptions = require(dependencyMap[9]).getDefaultOptions();
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
    defaultResult1 = closure_2.default(defaultResult1, defaultResult2);
    const _isNaN = isNaN;
    if (isNaN(defaultResult1)) {
      const _RangeError2 = RangeError;
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
      const defaultResult3 = closure_8.default(closure_7.default(locale), obj);
      if (defaultResult1 > 0) {
        let defaultResult4 = closure_6.default(defaultResult2);
        let defaultResult5 = closure_6.default(defaultResult1);
      } else {
        defaultResult4 = closure_6.default(defaultResult1);
        defaultResult5 = closure_6.default(defaultResult2);
      }
      const defaultResult6 = closure_4.default(defaultResult5, defaultResult4);
      defaultResult2 = closure_7.default(locale);
      const _Math = Math;
      const rounded = Math.round((defaultResult6 - (closure_9.default(defaultResult5) - closure_9.default(defaultResult4)) / 1000) / 60);
      if (rounded < 2) {
        if (null != locale) {
          if (locale.includeSeconds) {
            if (defaultResult6 < 5) {
              let formatDistanceResult = locale.formatDistance("lessThanXSeconds", 5, defaultResult3);
            } else if (defaultResult6 < 10) {
              formatDistanceResult = locale.formatDistance("lessThanXSeconds", 10, defaultResult3);
            } else if (defaultResult6 < 20) {
              formatDistanceResult = locale.formatDistance("lessThanXSeconds", 20, defaultResult3);
            } else if (defaultResult6 < 40) {
              formatDistanceResult = locale.formatDistance("halfAMinute", 0, defaultResult3);
            } else if (defaultResult6 < 60) {
              formatDistanceResult = locale.formatDistance("lessThanXMinutes", 1, defaultResult3);
            } else {
              formatDistanceResult = locale.formatDistance("xMinutes", 1, defaultResult3);
            }
          }
        }
        if (0 === rounded) {
          let formatDistanceResult1 = locale.formatDistance("lessThanXMinutes", 1, defaultResult3);
        } else {
          formatDistanceResult1 = locale.formatDistance("xMinutes", rounded, defaultResult3);
        }
        return formatDistanceResult1;
      } else if (rounded < 45) {
        return locale.formatDistance("xMinutes", rounded, defaultResult3);
      } else if (rounded < 90) {
        return locale.formatDistance("aboutXHours", 1, defaultResult3);
      } else if (rounded < closure_11) {
        const _Math6 = Math;
        return locale.formatDistance("aboutXHours", Math.round(rounded / 60), defaultResult3);
      } else if (rounded < closure_12) {
        return locale.formatDistance("xDays", 1, defaultResult3);
      } else if (rounded < closure_13) {
        const _Math5 = Math;
        return locale.formatDistance("xDays", Math.round(rounded / closure_11), defaultResult3);
      } else if (rounded < closure_14) {
        const _Math4 = Math;
        return locale.formatDistance("aboutXMonths", Math.round(rounded / closure_13), defaultResult3);
      } else {
        const defaultResult8 = closure_3.default(defaultResult5, defaultResult4);
        if (defaultResult8 < 12) {
          const _Math3 = Math;
          return locale.formatDistance("xMonths", Math.round(rounded / closure_13), defaultResult3);
        } else {
          const result = defaultResult8 % 12;
          const _Math2 = Math;
          const rounded1 = Math.floor(defaultResult8 / 12);
          if (result < 3) {
            let formatDistanceResult2 = locale.formatDistance("aboutXYears", rounded1, defaultResult3);
          } else if (result < 9) {
            formatDistanceResult2 = locale.formatDistance("overXYears", rounded1, defaultResult3);
          } else {
            formatDistanceResult2 = locale.formatDistance("almostXYears", rounded1 + 1, defaultResult3);
          }
          return formatDistanceResult2;
        }
      }
      const defaultResult7 = closure_9.default(defaultResult5);
    }
  } else {
    const _RangeError = RangeError;
    const rangeError1 = new RangeError("locale must contain formatDistance property");
    throw rangeError1;
  }
};
export default exports.default;

// Module ID: 3449
// Function ID: 26772
// Name: getUTCWeekYear
// Dependencies: []
// Exports: default

// Module 3449 (getUTCWeekYear)
let closure_2 = _interopRequireDefault(require(dependencyMap[0]));
let closure_3 = _interopRequireDefault(require(dependencyMap[1]));
let closure_4 = _interopRequireDefault(require(dependencyMap[2]));
let closure_5 = _interopRequireDefault(require(dependencyMap[3]));

export default function getUTCWeekYear(defaultResult1, firstWeekContainsDate) {
  closure_3.default(1, arguments);
  defaultResult1 = closure_2.default(defaultResult1);
  const uTCFullYear = defaultResult1.getUTCFullYear();
  const defaultOptions = require(dependencyMap[4]).getDefaultOptions();
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
  const defaultResult2 = closure_5.default(num);
  if (defaultResult2 >= 1) {
    if (defaultResult2 <= 7) {
      const _Date = Date;
      const date = new Date(0);
      date.setUTCFullYear(uTCFullYear + 1, 0, defaultResult2);
      date.setUTCHours(0, 0, 0, 0);
      const _Date2 = Date;
      const date1 = new Date(0);
      date1.setUTCFullYear(uTCFullYear, 0, defaultResult2);
      date1.setUTCHours(0, 0, 0, 0);
      const defaultResult3 = closure_4.default(date, firstWeekContainsDate);
      const time = defaultResult1.getTime();
      if (time >= defaultResult3.getTime()) {
        let sum = uTCFullYear + 1;
      } else {
        const time1 = defaultResult1.getTime();
        sum = uTCFullYear;
        if (time1 < defaultResult4.getTime()) {
          sum = uTCFullYear - 1;
        }
      }
      return sum;
    }
  }
  const rangeError = new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  throw rangeError;
};
export default exports.default;

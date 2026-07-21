// Module ID: 3633
// Function ID: 27900
// Name: setWeekYear
// Dependencies: []
// Exports: default

// Module 3633 (setWeekYear)
let closure_2 = _interopRequireDefault(require(dependencyMap[0]));
let closure_3 = _interopRequireDefault(require(dependencyMap[1]));
let closure_4 = _interopRequireDefault(require(dependencyMap[2]));
let closure_5 = _interopRequireDefault(require(dependencyMap[3]));
let closure_6 = _interopRequireDefault(require(dependencyMap[4]));

export default function setWeekYear(defaultResult1, defaultResult1, firstWeekContainsDate) {
  closure_6.default(2, arguments);
  const defaultOptions = require(dependencyMap[5]).getDefaultOptions();
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
  const defaultResult2 = closure_4.default(defaultResult1);
  defaultResult1 = closure_5.default(num);
  const defaultResult3 = closure_5.default(defaultResult1);
  const date = new Date(0);
  date.setFullYear(defaultResult3, 0, defaultResult1);
  date.setHours(0, 0, 0, 0);
  const defaultResult5 = closure_3.default(date, firstWeekContainsDate);
  defaultResult5.setDate(defaultResult5.getDate() + closure_2.default(defaultResult2, closure_3.default(defaultResult2, firstWeekContainsDate)));
  return defaultResult5;
};
export default exports.default;

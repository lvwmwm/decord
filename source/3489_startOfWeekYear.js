// Module ID: 3489
// Function ID: 26893
// Name: startOfWeekYear
// Dependencies: []
// Exports: default

// Module 3489 (startOfWeekYear)
let closure_2 = _interopRequireDefault(require(dependencyMap[0]));
let closure_3 = _interopRequireDefault(require(dependencyMap[1]));
let closure_4 = _interopRequireDefault(require(dependencyMap[2]));
let closure_5 = _interopRequireDefault(require(dependencyMap[3]));

export default function startOfWeekYear(defaultResult1, firstWeekContainsDate) {
  closure_5.default(1, arguments);
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
  defaultResult1 = closure_4.default(num);
  const date = new Date(0);
  date.setFullYear(closure_2.default(defaultResult1, firstWeekContainsDate), 0, defaultResult1);
  date.setHours(0, 0, 0, 0);
  return closure_3.default(date, firstWeekContainsDate);
};
export default exports.default;

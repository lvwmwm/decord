// Module ID: 3581
// Function ID: 27744
// Name: lastDayOfWeek
// Dependencies: []
// Exports: default

// Module 3581 (lastDayOfWeek)
let closure_2 = _interopRequireDefault(require(dependencyMap[0]));
let closure_3 = _interopRequireDefault(require(dependencyMap[1]));
let closure_4 = _interopRequireDefault(require(dependencyMap[2]));

export default function lastDayOfWeek(defaultResult1, weekStartsOn) {
  closure_4.default(1, arguments);
  const defaultOptions = require(dependencyMap[3]).getDefaultOptions();
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
  defaultResult1 = closure_3.default(num);
  if (defaultResult1 >= 0) {
    if (defaultResult1 <= 6) {
      const defaultResult2 = closure_2.default(defaultResult1);
      const day = defaultResult2.getDay();
      let num3 = 0;
      if (day < defaultResult1) {
        num3 = -7;
      }
      const diff = 6 + num3 - (day - defaultResult1);
      defaultResult2.setHours(0, 0, 0, 0);
      defaultResult2.setDate(defaultResult2.getDate() + diff);
      return defaultResult2;
    }
  }
  const rangeError = new RangeError("weekStartsOn must be between 0 and 6");
  throw rangeError;
};
export default exports.default;

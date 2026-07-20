// Module ID: 3357
// Function ID: 26448
// Name: addBusinessDays
// Dependencies: []
// Exports: default

// Module 3357 (addBusinessDays)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = _interopRequireDefault(require(dependencyMap[3]));
let closure_4 = _interopRequireDefault(require(dependencyMap[4]));
let closure_5 = _interopRequireDefault(require(dependencyMap[5]));

export default function addBusinessDays(defaultResult1, defaultResult1) {
  let diff;
  closure_3.default(2, arguments);
  defaultResult1 = closure_1.default(defaultResult1);
  let defaultResult2 = closure_0.default(defaultResult1);
  const defaultResult3 = closure_2.default(defaultResult1);
  if (isNaN(defaultResult3)) {
    const _Date = Date;
    const _NaN = NaN;
    const date = new Date(NaN);
    return date;
  } else {
    let num3 = 1;
    const hours = defaultResult1.getHours();
    if (defaultResult3 < 0) {
      num3 = -1;
    }
    defaultResult1.setDate(defaultResult1.getDate() + 7 * closure_2.default(defaultResult3 / 5));
    const _Math = Math;
    let absolute = Math.abs(defaultResult3 % 5);
    if (absolute > 0) {
      do {
        let setDateResult1 = defaultResult1.setDate(defaultResult1.getDate() + num3);
        let tmp10 = closure_0;
        diff = absolute;
        if (!closure_0.default(defaultResult1)) {
          diff = absolute - 1;
        }
        absolute = diff;
      } while (diff > 0);
    }
    if (defaultResult2) {
      defaultResult2 = closure_0.default(defaultResult1);
    }
    if (defaultResult2) {
      defaultResult2 = 0 !== defaultResult3;
    }
    if (defaultResult2) {
      if (closure_5.default(defaultResult1)) {
        let num6 = -1;
        if (num3 < 0) {
          num6 = 2;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num6);
        const date1 = defaultResult1.getDate();
      }
      if (closure_4.default(defaultResult1)) {
        let num7 = -2;
        if (num3 < 0) {
          num7 = 1;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num7);
        const date2 = defaultResult1.getDate();
      }
    }
    defaultResult1.setHours(hours);
    return defaultResult1;
  }
};
export default exports.default;

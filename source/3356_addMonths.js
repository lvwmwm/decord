// Module ID: 3356
// Function ID: 26445
// Name: addMonths
// Dependencies: []
// Exports: default

// Module 3356 (addMonths)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));

export default function addMonths(interval, defaultResult1) {
  closure_2.default(2, arguments);
  defaultResult1 = closure_1.default(interval);
  const defaultResult2 = closure_0.default(defaultResult1);
  if (isNaN(defaultResult2)) {
    const _Date2 = Date;
    const _NaN = NaN;
    const date = new Date(NaN);
    return date;
  } else if (defaultResult2) {
    const date1 = defaultResult1.getDate();
    const _Date = Date;
    const date2 = new Date(defaultResult1.getTime());
    date2.setMonth(defaultResult1.getMonth() + defaultResult2 + 1, 0);
    let tmp8 = date2;
    if (date1 < date2.getDate()) {
      const fullYear = date2.getFullYear();
      defaultResult1.setFullYear(fullYear, date2.getMonth(), date1);
      tmp8 = defaultResult1;
    }
    return tmp8;
  } else {
    return defaultResult1;
  }
};
export default exports.default;

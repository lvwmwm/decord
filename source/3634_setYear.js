// Module ID: 3634
// Function ID: 27903
// Name: setYear
// Dependencies: []
// Exports: default

// Module 3634 (setYear)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));

export default function setYear(date, defaultResult1) {
  closure_2.default(2, arguments);
  defaultResult1 = closure_1.default(date);
  if (isNaN(defaultResult1.getTime())) {
    const _Date = Date;
    const _NaN = NaN;
    date = new Date(NaN);
    return date;
  } else {
    defaultResult1.setFullYear(defaultResult2);
    return defaultResult1;
  }
  const defaultResult2 = closure_0.default(defaultResult1);
};
export default exports.default;

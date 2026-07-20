// Module ID: 3355
// Function ID: 26442
// Name: addDays
// Dependencies: []
// Exports: default

// Module 3355 (addDays)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));

export default function addDays(defaultResult1, defaultResult1) {
  closure_2.default(2, arguments);
  defaultResult1 = closure_1.default(defaultResult1);
  const defaultResult2 = closure_0.default(defaultResult1);
  if (isNaN(defaultResult2)) {
    const _Date = Date;
    const _NaN = NaN;
    const date = new Date(NaN);
    return date;
  } else if (defaultResult2) {
    defaultResult1.setDate(defaultResult1.getDate() + defaultResult2);
    return defaultResult1;
  } else {
    return defaultResult1;
  }
};
export default exports.default;

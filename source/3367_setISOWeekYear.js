// Module ID: 3367
// Function ID: 26483
// Name: setISOWeekYear
// Dependencies: []
// Exports: default

// Module 3367 (setISOWeekYear)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = _interopRequireDefault(require(dependencyMap[3]));
let closure_4 = _interopRequireDefault(require(dependencyMap[4]));

export default function setISOWeekYear(defaultResult1, defaultResult1) {
  closure_4.default(2, arguments);
  defaultResult1 = closure_1.default(defaultResult1);
  const defaultResult2 = closure_0.default(defaultResult1);
  const date = new Date(0);
  date.setFullYear(defaultResult2, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult4 = closure_2.default(date);
  defaultResult4.setDate(defaultResult4.getDate() + closure_3.default(defaultResult1, closure_2.default(defaultResult1)));
  return defaultResult4;
};
export default exports.default;

// Module ID: 3432
// Function ID: 26682
// Name: endOfISOWeekYear
// Dependencies: []
// Exports: default

// Module 3432 (endOfISOWeekYear)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));

export default function endOfISOWeekYear(defaultResult1) {
  closure_2.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(closure_0.default(defaultResult1) + 1, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult2 = closure_1.default(date);
  defaultResult2.setMilliseconds(defaultResult2.getMilliseconds() - 1);
  return defaultResult2;
};
export default exports.default;

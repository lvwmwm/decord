// Module ID: 3582
// Function ID: 27752
// Name: lastDayOfISOWeekYear
// Dependencies: []
// Exports: default

// Module 3582 (lastDayOfISOWeekYear)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));

export default function lastDayOfISOWeekYear(defaultResult1) {
  closure_2.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(closure_0.default(defaultResult1) + 1, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult2 = closure_1.default(date);
  defaultResult2.setDate(defaultResult2.getDate() - 1);
  return defaultResult2;
};
export default exports.default;

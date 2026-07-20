// Module ID: 3368
// Function ID: 26481
// Name: startOfISOWeekYear
// Dependencies: []
// Exports: default

// Module 3368 (startOfISOWeekYear)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));

export default function startOfISOWeekYear(defaultResult1) {
  closure_2.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(closure_0.default(defaultResult1), 0, 4);
  date.setHours(0, 0, 0, 0);
  return closure_1.default(date);
};
export default exports.default;

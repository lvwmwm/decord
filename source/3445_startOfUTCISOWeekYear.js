// Module ID: 3445
// Function ID: 26755
// Name: startOfUTCISOWeekYear
// Dependencies: []
// Exports: default

// Module 3445 (startOfUTCISOWeekYear)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));

export default function startOfUTCISOWeekYear(defaultResult1) {
  closure_2.default(1, arguments);
  const date = new Date(0);
  date.setUTCFullYear(closure_0.default(defaultResult1), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return closure_1.default(date);
};
export default exports.default;

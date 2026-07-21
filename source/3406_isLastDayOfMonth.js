// Module ID: 3406
// Function ID: 26609
// Name: isLastDayOfMonth
// Dependencies: []
// Exports: default

// Module 3406 (isLastDayOfMonth)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = _interopRequireDefault(require(dependencyMap[3]));

export default function isLastDayOfMonth(defaultResult1) {
  closure_3.default(1, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  const time = closure_1.default(defaultResult1).getTime();
  const defaultResult2 = closure_1.default(defaultResult1);
  return time === closure_2.default(defaultResult1).getTime();
};
export default exports.default;

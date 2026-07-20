// Module ID: 3605
// Function ID: 27814
// Name: previousDay
// Dependencies: []
// Exports: default

// Module 3605 (previousDay)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));

export default function previousDay(defaultResult1) {
  closure_0.default(2, arguments);
  const diff = closure_1.default(defaultResult1) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return closure_2.default(defaultResult1, sum);
};
export default exports.default;

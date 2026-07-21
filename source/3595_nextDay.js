// Module ID: 3595
// Function ID: 27783
// Name: nextDay
// Dependencies: []
// Exports: default

// Module 3595 (nextDay)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));

export default function nextDay(defaultResult1) {
  closure_2.default(2, arguments);
  const diff = arg1 - closure_1.default(defaultResult1);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return closure_0.default(defaultResult1, sum);
};
export default exports.default;

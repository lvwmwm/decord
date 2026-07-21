// Module ID: 3507
// Function ID: 26947
// Name: isFuture
// Dependencies: []
// Exports: default

// Module 3507 (isFuture)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function isFuture(defaultResult1) {
  closure_1.default(1, arguments);
  const time = closure_0.default(defaultResult1).getTime();
  return time > Date.now();
};
export default exports.default;

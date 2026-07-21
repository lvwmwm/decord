// Module ID: 3551
// Function ID: 27659
// Name: isPast
// Dependencies: []
// Exports: default

// Module 3551 (isPast)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function isPast(defaultResult1) {
  closure_1.default(1, arguments);
  const time = closure_0.default(defaultResult1).getTime();
  return time < Date.now();
};
export default exports.default;

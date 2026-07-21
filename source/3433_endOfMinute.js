// Module ID: 3433
// Function ID: 26690
// Name: endOfMinute
// Dependencies: []
// Exports: default

// Module 3433 (endOfMinute)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function endOfMinute(defaultResult1) {
  closure_1.default(1, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  defaultResult1.setSeconds(59, 999);
  return defaultResult1;
};
export default exports.default;

// Module ID: 3429
// Function ID: 26678
// Name: endOfHour
// Dependencies: []
// Exports: default

// Module 3429 (endOfHour)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function endOfHour(defaultResult1) {
  closure_1.default(1, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  defaultResult1.setMinutes(59, 59, 999);
  return defaultResult1;
};
export default exports.default;

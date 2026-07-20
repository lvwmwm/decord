// Module ID: 3423
// Function ID: 26655
// Name: startOfMonth
// Dependencies: []
// Exports: default

// Module 3423 (startOfMonth)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function startOfMonth(defaultResult1) {
  closure_1.default(1, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  defaultResult1.setDate(1);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;

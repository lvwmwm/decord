// Module ID: 3584
// Function ID: 27753
// Name: lastDayOfYear
// Dependencies: []
// Exports: default

// Module 3584 (lastDayOfYear)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function lastDayOfYear(defaultResult1) {
  closure_1.default(1, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  defaultResult1.setFullYear(defaultResult1.getFullYear() + 1, 0, 0);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;

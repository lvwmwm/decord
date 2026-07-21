// Module ID: 3635
// Function ID: 27906
// Name: startOfDecade
// Dependencies: []
// Exports: default

// Module 3635 (startOfDecade)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function startOfDecade(defaultResult1) {
  closure_1.default(1, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  defaultResult1.setFullYear(10 * Math.floor(defaultResult1.getFullYear() / 10), 0, 1);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;

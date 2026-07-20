// Module ID: 3428
// Function ID: 26670
// Name: endOfDecade
// Dependencies: []
// Exports: default

// Module 3428 (endOfDecade)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function endOfDecade(defaultResult1) {
  closure_1.default(1, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  defaultResult1.setFullYear(9 + 10 * Math.floor(defaultResult1.getFullYear() / 10), 11, 31);
  defaultResult1.setHours(23, 59, 59, 999);
  return defaultResult1;
};
export default exports.default;

// Module ID: 3527
// Function ID: 27246
// Name: setUTCISOWeek
// Dependencies: []
// Exports: default

// Module 3527 (setUTCISOWeek)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = _interopRequireDefault(require(dependencyMap[3]));

export default function setUTCISOWeek(defaultResult1, defaultResult1) {
  closure_3.default(2, arguments);
  defaultResult1 = closure_1.default(defaultResult1);
  const diff = closure_2.default(defaultResult1) - closure_0.default(defaultResult1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;

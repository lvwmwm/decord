// Module ID: 3632
// Function ID: 27897
// Name: setWeek
// Dependencies: []
// Exports: default

// Module 3632 (setWeek)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = _interopRequireDefault(require(dependencyMap[3]));

export default function setWeek(defaultResult1, defaultResult1, defaultResult2) {
  closure_2.default(2, arguments);
  defaultResult1 = closure_1.default(defaultResult1);
  const diff = closure_0.default(defaultResult1, defaultResult2) - closure_3.default(defaultResult1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;

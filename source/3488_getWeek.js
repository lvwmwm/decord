// Module ID: 3488
// Function ID: 26890
// Name: getWeek
// Dependencies: []
// Exports: default

// Module 3488 (getWeek)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = _interopRequireDefault(require(dependencyMap[3]));
let closure_4 = 604800000;

export default function getWeek(defaultResult1, defaultResult2) {
  closure_3.default(1, arguments);
  defaultResult1 = closure_2.default(defaultResult1);
  const time = closure_0.default(defaultResult1, defaultResult2).getTime();
  defaultResult2 = closure_0.default(defaultResult1, defaultResult2);
  return Math.round((time - closure_1.default(defaultResult1, defaultResult2).getTime()) / closure_4) + 1;
};
export default exports.default;

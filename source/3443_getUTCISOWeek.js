// Module ID: 3443
// Function ID: 26749
// Name: getUTCISOWeek
// Dependencies: []
// Exports: default

// Module 3443 (getUTCISOWeek)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = _interopRequireDefault(require(dependencyMap[3]));
let closure_4 = 604800000;

export default function getUTCISOWeek(defaultResult1) {
  closure_3.default(1, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  const time = closure_1.default(defaultResult1).getTime();
  const defaultResult2 = closure_1.default(defaultResult1);
  return Math.round((time - closure_2.default(defaultResult1).getTime()) / closure_4) + 1;
};
export default exports.default;

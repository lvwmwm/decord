// Module ID: 3630
// Function ID: 27886
// Name: setQuarter
// Dependencies: []
// Exports: default

// Module 3630 (setQuarter)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = _interopRequireDefault(require(dependencyMap[3]));

export default function setQuarter(defaultResult1, defaultResult1) {
  closure_3.default(2, arguments);
  defaultResult1 = closure_1.default(defaultResult1);
  const diff = closure_0.default(defaultResult1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return closure_2.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;

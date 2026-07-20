// Module ID: 3395
// Function ID: 26570
// Name: getQuarter
// Dependencies: []
// Exports: default

// Module 3395 (getQuarter)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function getQuarter(defaultResult1) {
  closure_1.default(1, arguments);
  return Math.floor(closure_0.default(defaultResult1).getMonth() / 3) + 1;
};
export default exports.default;

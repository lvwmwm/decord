// Module ID: 3389
// Function ID: 26555
// Name: isValid
// Dependencies: []
// Exports: default

// Module 3389 (isValid)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));

export default function isValid(defaultResult1) {
  closure_2.default(1, arguments);
  if (!closure_0.default(defaultResult1)) {
    if ("number" !== typeof defaultResult1) {
      return false;
    }
  }
  return !isNaN(Number(closure_1.default(defaultResult1)));
};
export default exports.default;

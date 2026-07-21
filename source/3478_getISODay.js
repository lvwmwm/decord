// Module ID: 3478
// Function ID: 26865
// Name: getISODay
// Dependencies: []
// Exports: default

// Module 3478 (getISODay)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function getISODay(defaultResult1) {
  closure_1.default(1, arguments);
  let num = closure_0.default(defaultResult1).getDay();
  if (0 === num) {
    num = 7;
  }
  return num;
};
export default exports.default;

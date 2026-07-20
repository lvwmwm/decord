// Module ID: 3209
// Function ID: 25817
// Name: isSameUTCWeek
// Dependencies: []
// Exports: default

// Module 3209 (isSameUTCWeek)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function isSameUTCWeek(defaultResult1, defaultResult1, defaultResult2) {
  closure_0.default(2, arguments);
  defaultResult1 = closure_1.default(defaultResult1, defaultResult2);
  const time = defaultResult1.getTime();
  return time === closure_1.default(defaultResult1, defaultResult2).getTime();
};
export default exports.default;

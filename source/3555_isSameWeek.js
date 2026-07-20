// Module ID: 3555
// Function ID: 27666
// Name: isSameWeek
// Dependencies: []
// Exports: default

// Module 3555 (isSameWeek)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function isSameWeek(defaultResult1, defaultResult1, defaultResult2) {
  closure_1.default(2, arguments);
  defaultResult1 = closure_0.default(defaultResult1, defaultResult2);
  const time = defaultResult1.getTime();
  return time === closure_0.default(defaultResult1, defaultResult2).getTime();
};
export default exports.default;

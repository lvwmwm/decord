// Module ID: 3426
// Function ID: 26664
// Name: startOfYear
// Dependencies: []
// Exports: default

// Module 3426 (startOfYear)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function startOfYear(defaultResult1) {
  closure_1.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(closure_0.default(defaultResult1).getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
};
export default exports.default;

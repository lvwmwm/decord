// Module ID: 3620
// Function ID: 27857
// Name: setMonth
// Dependencies: []
// Exports: default

// Module 3620 (setMonth)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = _interopRequireDefault(require(dependencyMap[3]));

export default function setMonth(defaultResult1, defaultResult1) {
  closure_3.default(2, arguments);
  defaultResult1 = closure_1.default(defaultResult1);
  const defaultResult2 = closure_0.default(defaultResult1);
  const fullYear = defaultResult1.getFullYear();
  const date1 = new Date(0);
  date1.setFullYear(fullYear, defaultResult2, 15);
  date1.setHours(0, 0, 0, 0);
  defaultResult1.setMonth(defaultResult2, Math.min(defaultResult1.getDate(), closure_2.default(date1)));
  return defaultResult1;
};
export default exports.default;

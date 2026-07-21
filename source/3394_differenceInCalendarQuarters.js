// Module ID: 3394
// Function ID: 26572
// Name: differenceInCalendarQuarters
// Dependencies: []
// Exports: default

// Module 3394 (differenceInCalendarQuarters)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));

export default function differenceInCalendarQuarters(defaultResult1, defaultResult1) {
  closure_2.default(2, arguments);
  defaultResult1 = closure_1.default(defaultResult1);
  const defaultResult2 = closure_1.default(defaultResult1);
  const fullYear = defaultResult1.getFullYear();
  const diff = fullYear - defaultResult2.getFullYear();
  return 4 * diff + (closure_0.default(defaultResult1) - closure_0.default(defaultResult2));
};
export default exports.default;

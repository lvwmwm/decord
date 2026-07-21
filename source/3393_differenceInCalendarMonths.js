// Module ID: 3393
// Function ID: 26569
// Name: differenceInCalendarMonths
// Dependencies: []
// Exports: default

// Module 3393 (differenceInCalendarMonths)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function differenceInCalendarMonths(defaultResult1, defaultResult1) {
  closure_1.default(2, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  const defaultResult2 = closure_0.default(defaultResult1);
  const fullYear = defaultResult1.getFullYear();
  const diff = fullYear - defaultResult2.getFullYear();
  const month = defaultResult1.getMonth();
  return 12 * diff + (month - defaultResult2.getMonth());
};
export default exports.default;

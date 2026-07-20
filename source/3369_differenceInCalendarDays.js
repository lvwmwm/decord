// Module ID: 3369
// Function ID: 26484
// Name: differenceInCalendarDays
// Dependencies: []
// Exports: default

// Module 3369 (differenceInCalendarDays)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = 86400000;

export default function differenceInCalendarDays(defaultResult1, defaultResult1) {
  closure_2.default(2, arguments);
  defaultResult1 = closure_1.default(defaultResult1);
  const defaultResult2 = closure_1.default(defaultResult1);
  const time = defaultResult1.getTime();
  const diff = time - closure_0.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - closure_0.default(defaultResult2))) / closure_3);
};
export default exports.default;

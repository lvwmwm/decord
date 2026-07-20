// Module ID: 3396
// Function ID: 26573
// Name: differenceInCalendarWeeks
// Dependencies: []
// Exports: default

// Module 3396 (differenceInCalendarWeeks)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = 604800000;

export default function differenceInCalendarWeeks(defaultResult1, defaultResult1, defaultResult2) {
  closure_2.default(2, arguments);
  defaultResult1 = closure_0.default(defaultResult1, defaultResult2);
  defaultResult2 = closure_0.default(defaultResult1, defaultResult2);
  const time = defaultResult1.getTime();
  const diff = time - closure_1.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - closure_1.default(defaultResult2))) / closure_3);
};
export default exports.default;

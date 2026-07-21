// Module ID: 3442
// Function ID: 26751
// Name: getUTCDayOfYear
// Dependencies: []
// Exports: default

// Module 3442 (getUTCDayOfYear)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = 86400000;

export default function getUTCDayOfYear(defaultResult1) {
  closure_1.default(1, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  const time = defaultResult1.getTime();
  defaultResult1.setUTCMonth(0, 1);
  defaultResult1.setUTCHours(0, 0, 0, 0);
  return Math.floor((time - defaultResult1.getTime()) / closure_2) + 1;
};
export default exports.default;

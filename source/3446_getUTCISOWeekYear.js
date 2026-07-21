// Module ID: 3446
// Function ID: 26763
// Name: getUTCISOWeekYear
// Dependencies: []
// Exports: default

// Module 3446 (getUTCISOWeekYear)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));

export default function getUTCISOWeekYear(defaultResult1) {
  closure_1.default(1, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  const uTCFullYear = defaultResult1.getUTCFullYear();
  const date = new Date(0);
  date.setUTCFullYear(uTCFullYear + 1, 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  const date1 = new Date(0);
  date1.setUTCFullYear(uTCFullYear, 0, 4);
  date1.setUTCHours(0, 0, 0, 0);
  const defaultResult2 = closure_2.default(date);
  const time = defaultResult1.getTime();
  if (time >= defaultResult2.getTime()) {
    let sum = uTCFullYear + 1;
  } else {
    const time1 = defaultResult1.getTime();
    sum = uTCFullYear;
    if (time1 < defaultResult3.getTime()) {
      sum = uTCFullYear - 1;
    }
  }
  return sum;
};
export default exports.default;

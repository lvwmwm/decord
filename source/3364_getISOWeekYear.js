// Module ID: 3364
// Function ID: 26469
// Name: getISOWeekYear
// Dependencies: []
// Exports: default

// Module 3364 (getISOWeekYear)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));

export default function getISOWeekYear(defaultResult1) {
  closure_2.default(1, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  const fullYear = defaultResult1.getFullYear();
  const date = new Date(0);
  date.setFullYear(fullYear + 1, 0, 4);
  date.setHours(0, 0, 0, 0);
  const date1 = new Date(0);
  date1.setFullYear(fullYear, 0, 4);
  date1.setHours(0, 0, 0, 0);
  const defaultResult2 = closure_1.default(date);
  const time = defaultResult1.getTime();
  if (time >= defaultResult2.getTime()) {
    let sum = fullYear + 1;
  } else {
    const time1 = defaultResult1.getTime();
    sum = fullYear;
    if (time1 < defaultResult3.getTime()) {
      sum = fullYear - 1;
    }
  }
  return sum;
};
export default exports.default;

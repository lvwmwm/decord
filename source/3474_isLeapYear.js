// Module ID: 3474
// Function ID: 26849
// Name: isLeapYear
// Dependencies: []
// Exports: default

// Module 3474 (isLeapYear)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function isLeapYear(defaultResult1) {
  closure_1.default(1, arguments);
  const fullYear = closure_0.default(defaultResult1).getFullYear();
  let tmp3 = fullYear % 400 === 0;
  if (!tmp3) {
    let tmp4 = fullYear % 4 === 0;
    if (tmp4) {
      tmp4 = fullYear % 100 !== 0;
    }
    tmp3 = tmp4;
  }
  return tmp3;
};
export default exports.default;

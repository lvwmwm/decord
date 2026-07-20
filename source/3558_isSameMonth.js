// Module ID: 3558
// Function ID: 27675
// Name: isSameMonth
// Dependencies: []
// Exports: default

// Module 3558 (isSameMonth)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function isSameMonth(defaultResult1, defaultResult1) {
  closure_1.default(2, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  const defaultResult2 = closure_0.default(defaultResult1);
  const fullYear = defaultResult1.getFullYear();
  let tmp3 = fullYear === defaultResult2.getFullYear();
  if (tmp3) {
    const month = defaultResult1.getMonth();
    tmp3 = month === defaultResult2.getMonth();
  }
  return tmp3;
};
export default exports.default;

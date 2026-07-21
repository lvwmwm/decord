// Module ID: 3412
// Function ID: 26622
// Name: differenceInYears
// Dependencies: []
// Exports: default

// Module 3412 (differenceInYears)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = _interopRequireDefault(require(dependencyMap[3]));

export default function differenceInYears(defaultResult1, defaultResult1) {
  closure_3.default(2, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  const defaultResult2 = closure_0.default(defaultResult1);
  const defaultResult3 = closure_2.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(closure_1.default(defaultResult1, defaultResult2));
  defaultResult1.setFullYear(1584);
  defaultResult2.setFullYear(1584);
  const result = defaultResult3 * (absolute - Number(closure_2.default(defaultResult1, defaultResult2) === -defaultResult3));
  let num = 0;
  if (0 !== result) {
    num = result;
  }
  return num;
};
export default exports.default;

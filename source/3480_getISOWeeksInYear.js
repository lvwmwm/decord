// Module ID: 3480
// Function ID: 26871
// Name: getISOWeeksInYear
// Dependencies: [3070230541, 4026531853, 899103]
// Exports: default

// Module 3480 (getISOWeeksInYear)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = 604800000;

export default function getISOWeeksInYear(defaultResult1) {
  closure_2.default(1, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  const defaultResult2 = closure_0.default(closure_1.default(defaultResult1, 60));
  return Math.round((closure_0.default(closure_1.default(defaultResult1, 60)).valueOf() - defaultResult1.valueOf()) / closure_3);
};
export default exports.default;

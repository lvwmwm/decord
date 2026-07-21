// Module ID: 3473
// Function ID: 26851
// Name: getDaysInYear
// Dependencies: []
// Exports: default

// Module 3473 (getDaysInYear)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));

export default function getDaysInYear(defaultResult1) {
  closure_2.default(1, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  if ("Invalid Date" === String(date)) {
    const _NaN = NaN;
    return NaN;
  } else {
    let num = 365;
    if (closure_1.default(defaultResult1)) {
      num = 366;
    }
    return num;
  }
  const date = new Date(defaultResult1);
};
export default exports.default;

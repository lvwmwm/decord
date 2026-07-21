// Module ID: 3422
// Function ID: 26657
// Name: eachWeekendOfMonth
// Dependencies: []
// Exports: default

// Module 3422 (eachWeekendOfMonth)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = _interopRequireDefault(require(dependencyMap[3]));

export default function eachWeekendOfMonth(defaultResult1) {
  closure_3.default(1, arguments);
  defaultResult1 = closure_1.default(defaultResult1);
  if (isNaN(defaultResult1.getTime())) {
    const _RangeError = RangeError;
    const rangeError = new RangeError("The passed date is invalid");
    throw rangeError;
  } else {
    const obj = { start: defaultResult1, end: closure_2.default(defaultResult1) };
    return closure_0.default(obj);
  }
};
export default exports.default;

// Module ID: 3358
// Function ID: 26456
// Name: isWeekend
// Dependencies: []
// Exports: default

// Module 3358 (isWeekend)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function isWeekend(defaultResult1) {
  closure_1.default(1, arguments);
  const day = closure_0.default(defaultResult1).getDay();
  let tmp3 = 0 === day;
  if (!tmp3) {
    tmp3 = 6 === day;
  }
  return tmp3;
};
export default exports.default;

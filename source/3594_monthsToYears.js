// Module ID: 3594
// Function ID: 27776
// Name: monthsToYears
// Dependencies: []
// Exports: default

// Module 3594 (monthsToYears)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function monthsToYears(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(dependencyMap[1]).monthsInYear);
};
export default exports.default;

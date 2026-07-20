// Module ID: 3649
// Function ID: 27942
// Name: yearsToMonths
// Dependencies: []
// Exports: default

// Module 3649 (yearsToMonths)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function yearsToMonths(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(dependencyMap[1]).monthsInYear);
};
export default exports.default;

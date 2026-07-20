// Module ID: 3613
// Function ID: 27838
// Name: quartersToMonths
// Dependencies: []
// Exports: default

// Module 3613 (quartersToMonths)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function quartersToMonths(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(dependencyMap[1]).monthsInQuarter);
};
export default exports.default;

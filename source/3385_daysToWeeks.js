// Module ID: 3385
// Function ID: 26541
// Name: daysToWeeks
// Dependencies: []
// Exports: default

// Module 3385 (daysToWeeks)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function daysToWeeks(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(dependencyMap[1]).daysInWeek);
};
export default exports.default;

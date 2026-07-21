// Module ID: 3648
// Function ID: 27945
// Name: weeksToDays
// Dependencies: []
// Exports: default

// Module 3648 (weeksToDays)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function weeksToDays(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(dependencyMap[1]).daysInWeek);
};
export default exports.default;

// Module ID: 3616
// Function ID: 27850
// Name: secondsToHours
// Dependencies: []
// Exports: default

// Module 3616 (secondsToHours)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function secondsToHours(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(dependencyMap[1]).secondsInHour);
};
export default exports.default;

// Module ID: 3497
// Function ID: 26920
// Name: hoursToSeconds
// Dependencies: []
// Exports: default

// Module 3497 (hoursToSeconds)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function hoursToSeconds(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(dependencyMap[1]).secondsInHour);
};
export default exports.default;

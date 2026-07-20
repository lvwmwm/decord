// Module ID: 3592
// Function ID: 27772
// Name: minutesToSeconds
// Dependencies: []
// Exports: default

// Module 3592 (minutesToSeconds)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function minutesToSeconds(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(dependencyMap[1]).secondsInMinute);
};
export default exports.default;

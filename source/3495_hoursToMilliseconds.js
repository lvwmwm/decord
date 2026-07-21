// Module ID: 3495
// Function ID: 26916
// Name: hoursToMilliseconds
// Dependencies: []
// Exports: default

// Module 3495 (hoursToMilliseconds)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function hoursToMilliseconds(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(dependencyMap[1]).millisecondsInHour);
};
export default exports.default;

// Module ID: 3617
// Function ID: 27852
// Name: secondsToMilliseconds
// Dependencies: []
// Exports: default

// Module 3617 (secondsToMilliseconds)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function secondsToMilliseconds(arg0) {
  tmp3.default(1, arguments);
  return arg0 * require(dependencyMap[1]).millisecondsInSecond;
};
export default exports.default;

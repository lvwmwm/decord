// Module ID: 3589
// Function ID: 27771
// Name: millisecondsToSeconds
// Dependencies: []
// Exports: default

// Module 3589 (millisecondsToSeconds)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function millisecondsToSeconds(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(dependencyMap[1]).millisecondsInSecond);
};
export default exports.default;

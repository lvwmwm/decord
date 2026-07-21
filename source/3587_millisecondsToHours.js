// Module ID: 3587
// Function ID: 27767
// Name: millisecondsToHours
// Dependencies: []
// Exports: default

// Module 3587 (millisecondsToHours)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function millisecondsToHours(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(dependencyMap[1]).millisecondsInHour);
};
export default exports.default;

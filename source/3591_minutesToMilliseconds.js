// Module ID: 3591
// Function ID: 27775
// Name: minutesToMilliseconds
// Dependencies: []
// Exports: default

// Module 3591 (minutesToMilliseconds)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function minutesToMilliseconds(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(dependencyMap[1]).millisecondsInMinute);
};
export default exports.default;

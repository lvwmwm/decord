// Module ID: 3590
// Function ID: 27768
// Name: minutesToHours
// Dependencies: []
// Exports: default

// Module 3590 (minutesToHours)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function minutesToHours(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(dependencyMap[1]).minutesInHour);
};
export default exports.default;

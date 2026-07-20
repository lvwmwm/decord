// Module ID: 3496
// Function ID: 26913
// Name: hoursToMinutes
// Dependencies: []
// Exports: default

// Module 3496 (hoursToMinutes)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function hoursToMinutes(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(dependencyMap[1]).minutesInHour);
};
export default exports.default;

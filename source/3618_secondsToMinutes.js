// Module ID: 3618
// Function ID: 27854
// Name: secondsToMinutes
// Dependencies: []
// Exports: default

// Module 3618 (secondsToMinutes)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function secondsToMinutes(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(dependencyMap[1]).secondsInMinute);
};
export default exports.default;

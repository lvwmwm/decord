// Module ID: 3593
// Function ID: 27779
// Name: monthsToQuarters
// Dependencies: []
// Exports: default

// Module 3593 (monthsToQuarters)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function monthsToQuarters(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(dependencyMap[1]).monthsInQuarter);
};
export default exports.default;

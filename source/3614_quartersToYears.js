// Module ID: 3614
// Function ID: 27845
// Name: quartersToYears
// Dependencies: []
// Exports: default

// Module 3614 (quartersToYears)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function quartersToYears(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(dependencyMap[1]).quartersInYear);
};
export default exports.default;

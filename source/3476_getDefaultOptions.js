// Module ID: 3476
// Function ID: 26855
// Name: getDefaultOptions
// Dependencies: []
// Exports: default

// Module 3476 (getDefaultOptions)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function getDefaultOptions() {
  return tmp3.default({}, require(dependencyMap[1]).getDefaultOptions());
};
export default exports.default;

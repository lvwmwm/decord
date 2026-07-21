// Module ID: 3456
// Function ID: 26799
// Name: cloneObject
// Dependencies: []
// Exports: default

// Module 3456 (cloneObject)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function cloneObject(defaultResult2) {
  return tmp3.default({}, defaultResult2);
};
export default exports.default;

// Module ID: 77
// Function ID: 1473
// Name: _defineProperty
// Dependencies: []

// Module 77 (_defineProperty)

export default function _defineProperty(arg0, arg1, value) {
  const tmp = require(dependencyMap[0])(arg1);
  if (tmp in arg0) {
    const _Object = Object;
    const obj = { value };
    Object.defineProperty(arg0, tmp, obj);
  } else {
    arg0[tmp] = value;
  }
  return arg0;
};

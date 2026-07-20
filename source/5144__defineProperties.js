// Module ID: 5144
// Function ID: 43586
// Name: _defineProperties
// Dependencies: [0]

// Module 5144 (_defineProperties)
function _defineProperties(arg0, arg1) {
  for (let num = 0; num < arg1.length; num = num + 1) {
    let tmp = arg1[num];
    tmp.enumerable = tmp.enumerable || false;
    tmp.configurable = true;
    if ("value" in tmp) {
      tmp.writable = true;
    }
    let _Object = Object;
    let tmp2 = require;
    let tmp3 = dependencyMap;
    let definePropertyResult = Object.defineProperty(arg0, require(dependencyMap[0])(tmp.key), tmp);
  }
}

export default function _createClass(arg0, arg1, arg2) {
  if (arg1) {
    _defineProperties(arg0.prototype, arg1);
  }
  if (arg2) {
    _defineProperties(arg0, arg2);
  }
  Object.defineProperty(arg0, "prototype", { writable: false });
  return arg0;
};

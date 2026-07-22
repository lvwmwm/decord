// Module ID: 4238
// Function ID: 37296
// Name: allocUnsafe
// Dependencies: []

// Module 4238 (allocUnsafe)
let tmp2 = tmp;
if ("object" === typeof exports && exports && !exports.nodeType && exports) {
  tmp2 = "object" === typeof module;
}
if (tmp2) {
  tmp2 = module;
}
if (tmp2) {
  tmp2 = !module.nodeType;
}
if (tmp2) {
  tmp2 = module;
}
let _Buffer;
if (tmp2) {
  if (tmp2.exports === tmp) {
    _Buffer = require(dependencyMap[0]).Buffer;
  }
}
let allocUnsafe;
if (_Buffer) {
  allocUnsafe = _Buffer.allocUnsafe;
}

export default function cloneBuffer(arr) {
  if (arg1) {
    return arr.slice();
  } else {
    if (allocUnsafe) {
      let constructor = allocUnsafe(length);
    } else {
      constructor = arr.constructor;
      const prototype = constructor.prototype;
      constructor = new constructor(length);
    }
    arr.copy(constructor);
    return constructor;
  }
};

// Module ID: 4242
// Function ID: 37328
// Name: allocUnsafe
// Dependencies: [580]

// Module 4242 (allocUnsafe)
const tmp = "object" === typeof exports && exports && !exports.nodeType && exports;
let tmp2 = tmp;
if (tmp) {
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
    _Buffer = require("module_580").Buffer;
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

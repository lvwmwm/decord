// Module ID: 605
// Function ID: 7040
// Name: isBuffer
// Dependencies: [580, 606]

// Module 605 (isBuffer)
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
let isBuffer;
if (_Buffer) {
  isBuffer = _Buffer.isBuffer;
}
if (!isBuffer) {
  isBuffer = require("stubFalse");
}

export default isBuffer;

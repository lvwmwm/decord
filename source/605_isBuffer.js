// Module ID: 605
// Function ID: 7040
// Name: isBuffer
// Dependencies: [6, 7]

// Module 605 (isBuffer)
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
    _Buffer = require("_classCallCheck").Buffer;
  }
}
let isBuffer;
if (_Buffer) {
  isBuffer = _Buffer.isBuffer;
}
if (!isBuffer) {
  isBuffer = require("_defineProperties");
}

export default isBuffer;

// Module ID: 6853
// Function ID: 54154
// Dependencies: [750, 767, 6854]

// Module 6853
import noop from "noop";

if (require("getNative")) {
  const _module = require("setToArray");
  let _module1 = require("getNative");
  const items = [, -0];
  const prototype = _module1.prototype;
  _module1 = new _module1(items);
  if (1 / _module(_module1)[1] === Infinity) {
    let noop = (arg0) => {
      let tmp = require(750) /* getNative */;
      tmp = new tmp(arg0);
      return tmp;
    };
  }
  module.exports = noop;
}

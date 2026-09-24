// Module ID: 5083
// Function ID: 5084
// Dependencies: [1287, 1296, 1286]

// Module 5083
import _mod1286 from "module_1286" /* 1286 */;
import _mod1287 from "module_1287" /* 1287 */;
import callBindBasic from "callBindBasic" /* 1296 */;

const obj = {};
try {
  obj.__proto__ = null;
  let _module = _mod1287;
  if (_module) {
    const _Object = Object;
    _module = _mod1287(Object.prototype, "__proto__");
  }
  let tmp6 = !("toString" in obj);
  if (tmp6) {
    let setDunder = _module;
    if (setDunder) {
      setDunder = typeof _module.set === "function";
    }
    if (setDunder) {
      const items = [_module.set];
      setDunder = callBindBasic(items);
    }
    if (!setDunder) {
      setDunder = function setDunder(arg0, arg1) {
        if (null == arg0) {
          const tmp6 = new _mod1286("set Object.prototype.__proto__ called on null or undefined");
          throw tmp6;
        } else {
          arg0.__proto__ = arg1;
          return arg1;
        }
      };
    }
    tmp6 = setDunder;
  }
  module.exports = tmp6;
} catch (tmp2) {
  throw tmp2;
}

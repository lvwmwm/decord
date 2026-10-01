// Module ID: 5144
// Function ID: 5145
// Dependencies: [1283, 1292, 1282]

// Module 5144
import _mod1282 from "module_1282" /* 1282 */;
import callBindBasic from "callBindBasic" /* 1292 */;
import module_1283_mod from "module_1283" /* 1283 */;

const obj = {};
try {
  obj.__proto__ = null;
} catch (tmp2) {
  throw tmp2;
}
const tmp3 = "toString" in obj;
let module_1283 = module_1283_mod;
if (module_1283) {
  const _Object = Object;
  module_1283 = module_1283(Object.prototype, "__proto__");
}
let tmp6 = !tmp3;
if (tmp6) {
  let setDunder = module_1283 && typeof module_1283.set === "function";
  if (setDunder) {
    const items = [module_1283.set];
    setDunder = callBindBasic(items);
  }
  if (!setDunder) {
    setDunder = function setDunder(arg0, arg1) {
      if (null == arg0) {
        const self = this;
        const self2 = this;
        const tmp4 = new _mod1282("set Object.prototype.__proto__ called on null or undefined");
        throw tmp4;
      } else {
        arg0.__proto__ = arg1;
        return arg1;
      }
    };
  }
  tmp6 = setDunder;
}

export default tmp6;

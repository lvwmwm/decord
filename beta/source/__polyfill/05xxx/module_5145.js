// Module ID: 5145
// Function ID: 5146
// Dependencies: [1295, 1304, 1294]

// Module 5145
import _mod1294 from "module_1294" /* 1294 */;
import callBindBasic from "callBindBasic" /* 1304 */;
import module_1295_mod from "module_1295" /* 1295 */;

const obj = {};
try {
  obj.__proto__ = null;
} catch (tmp2) {
  throw tmp2;
}
const tmp3 = "toString" in obj;
let module_1295 = module_1295_mod;
if (module_1295) {
  const _Object = Object;
  module_1295 = module_1295(Object.prototype, "__proto__");
}
let tmp6 = !tmp3;
if (tmp6) {
  let setDunder = module_1295 && typeof module_1295.set === "function";
  if (setDunder) {
    const items = [module_1295.set];
    setDunder = callBindBasic(items);
  }
  if (!setDunder) {
    setDunder = function setDunder(arg0, arg1) {
      if (null == arg0) {
        const self = this;
        const self2 = this;
        const tmp4 = new _mod1294("set Object.prototype.__proto__ called on null or undefined");
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

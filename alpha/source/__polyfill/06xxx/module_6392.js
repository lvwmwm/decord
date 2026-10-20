// Module ID: 6392
// Function ID: 6393
// Dependencies: [1309, 1318, 1308]

// Module 6392
import _mod1308 from "module_1308" /* 1308 */;
import callBindBasic from "callBindBasic" /* 1318 */;
import module_1309_mod from "module_1309" /* 1309 */;

const obj = {};
try {
  obj.__proto__ = null;
} catch (tmp2) {
  throw tmp2;
}
const tmp3 = "toString" in obj;
let module_1309 = module_1309_mod;
if (module_1309) {
  const _Object = Object;
  module_1309 = module_1309(Object.prototype, "__proto__");
}
let tmp6 = !tmp3;
if (tmp6) {
  let setDunder = module_1309 && typeof module_1309.set === "function";
  if (setDunder) {
    const items = [module_1309.set];
    setDunder = callBindBasic(items);
  }
  if (!setDunder) {
    setDunder = function setDunder(arg0, arg1) {
      if (null == arg0) {
        const self = this;
        const self2 = this;
        const tmp4 = new _mod1308("set Object.prototype.__proto__ called on null or undefined");
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

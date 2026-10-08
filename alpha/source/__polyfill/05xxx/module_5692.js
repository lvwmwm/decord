// Module ID: 5692
// Function ID: 5693
// Dependencies: [1306, 1315, 1305]

// Module 5692
import _mod1305 from "module_1305" /* 1305 */;
import callBindBasic from "callBindBasic" /* 1315 */;
import module_1306_mod from "module_1306" /* 1306 */;

const obj = {};
try {
  obj.__proto__ = null;
} catch (tmp2) {
  throw tmp2;
}
const tmp3 = "toString" in obj;
let module_1306 = module_1306_mod;
if (module_1306) {
  const _Object = Object;
  module_1306 = module_1306(Object.prototype, "__proto__");
}
let tmp6 = !tmp3;
if (tmp6) {
  let setDunder = module_1306 && typeof module_1306.set === "function";
  if (setDunder) {
    const items = [module_1306.set];
    setDunder = callBindBasic(items);
  }
  if (!setDunder) {
    setDunder = function setDunder(arg0, arg1) {
      if (null == arg0) {
        const self = this;
        const self2 = this;
        const tmp4 = new _mod1305("set Object.prototype.__proto__ called on null or undefined");
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

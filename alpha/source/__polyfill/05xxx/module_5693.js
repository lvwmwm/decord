// Module ID: 5693
// Function ID: 5694
// Dependencies: [1307, 1316, 1306]

// Module 5693
import _mod1306 from "module_1306" /* 1306 */;
import callBindBasic from "callBindBasic" /* 1316 */;
import module_1307_mod from "module_1307" /* 1307 */;

const obj = {};
try {
  obj.__proto__ = null;
} catch (tmp2) {
  throw tmp2;
}
const tmp3 = "toString" in obj;
let module_1307 = module_1307_mod;
if (module_1307) {
  const _Object = Object;
  module_1307 = module_1307(Object.prototype, "__proto__");
}
let tmp6 = !tmp3;
if (tmp6) {
  let setDunder = module_1307 && typeof module_1307.set === "function";
  if (setDunder) {
    const items = [module_1307.set];
    setDunder = callBindBasic(items);
  }
  if (!setDunder) {
    setDunder = function setDunder(arg0, arg1) {
      if (null == arg0) {
        const self = this;
        const self2 = this;
        const tmp4 = new _mod1306("set Object.prototype.__proto__ called on null or undefined");
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

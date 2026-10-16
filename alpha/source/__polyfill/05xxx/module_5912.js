// Module ID: 5912
// Function ID: 5913
// Dependencies: [5913, 1308, 5914, 5915]

// Module 5912
import _mod5913 from "module_5913" /* 5913 */;
import _mod5914 from "module_5914" /* 5914 */;
import _mod5915 from "module_5915" /* 5915 */;

let setProto;
let tmp;
const _mod1308 = tmp(1308);
if (_mod5913) {
  setProto = function setProto(arg0, arg1) {
    if (_mod5913(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod5914;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5915) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5915(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

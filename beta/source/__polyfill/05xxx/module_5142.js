// Module ID: 5142
// Function ID: 5143
// Dependencies: [5143, 1294, 5144, 5145]

// Module 5142
import _mod5143 from "module_5143" /* 5143 */;
import _mod5144 from "module_5144" /* 5144 */;
import _mod5145 from "module_5145" /* 5145 */;

let setProto;
let tmp;
const _mod1294 = tmp(1294);
if (_mod5143) {
  setProto = function setProto(arg0, arg1) {
    if (_mod5143(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1294("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod5144;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5145) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5145(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

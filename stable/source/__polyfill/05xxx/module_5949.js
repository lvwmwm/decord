// Module ID: 5949
// Function ID: 5950
// Dependencies: [5950, 1308, 5951, 5952]

// Module 5949
import _mod5950 from "module_5950" /* 5950 */;
import _mod5951 from "module_5951" /* 5951 */;
import _mod5952 from "module_5952" /* 5952 */;

let setProto;
let tmp;
const _mod1308 = tmp(1308);
if (_mod5950) {
  setProto = function setProto(arg0, arg1) {
    if (_mod5950(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod5951;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5952) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5952(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

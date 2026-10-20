// Module ID: 6386
// Function ID: 6387
// Dependencies: [6387, 1308, 6388, 6389]

// Module 6386
import _mod6387 from "module_6387" /* 6387 */;
import _mod6388 from "module_6388" /* 6388 */;
import _mod6389 from "module_6389" /* 6389 */;

let setProto;
let tmp;
const _mod1308 = tmp(1308);
if (_mod6387) {
  setProto = function setProto(arg0, arg1) {
    if (_mod6387(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod6388;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6389) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6389(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

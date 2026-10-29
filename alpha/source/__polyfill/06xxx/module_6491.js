// Module ID: 6491
// Function ID: 6492
// Dependencies: [6492, 1305, 6493, 6494]

// Module 6491
import _mod6492 from "module_6492" /* 6492 */;
import _mod6493 from "module_6493" /* 6493 */;
import _mod6494 from "module_6494" /* 6494 */;

let setProto;
let tmp;
const _mod1305 = tmp(1305);
if (_mod6492) {
  setProto = function setProto(arg0, arg1) {
    if (_mod6492(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1305("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod6493;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6494) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6494(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

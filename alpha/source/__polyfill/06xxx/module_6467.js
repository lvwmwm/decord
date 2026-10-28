// Module ID: 6467
// Function ID: 6468
// Dependencies: [6468, 1305, 6469, 6470]

// Module 6467
import _mod6468 from "module_6468" /* 6468 */;
import _mod6469 from "module_6469" /* 6469 */;
import _mod6470 from "module_6470" /* 6470 */;

let setProto;
let tmp;
const _mod1305 = tmp(1305);
if (_mod6468) {
  setProto = function setProto(arg0, arg1) {
    if (_mod6468(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1305("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod6469;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6470) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6470(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

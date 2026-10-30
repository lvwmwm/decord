// Module ID: 6498
// Function ID: 6499
// Dependencies: [6499, 1294, 6500, 6501]

// Module 6498
import _mod6499 from "module_6499" /* 6499 */;
import _mod6500 from "module_6500" /* 6500 */;
import _mod6501 from "module_6501" /* 6501 */;

let setProto;
let tmp;
const _mod1294 = tmp(1294);
if (_mod6499) {
  setProto = function setProto(arg0, arg1) {
    if (_mod6499(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1294("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod6500;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6501) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6501(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

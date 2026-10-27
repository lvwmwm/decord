// Module ID: 6433
// Function ID: 6434
// Dependencies: [6434, 1305, 6435, 6436]

// Module 6433
import _mod6434 from "module_6434" /* 6434 */;
import _mod6435 from "module_6435" /* 6435 */;
import _mod6436 from "module_6436" /* 6436 */;

let setProto;
let tmp;
const _mod1305 = tmp(1305);
if (_mod6434) {
  setProto = function setProto(arg0, arg1) {
    if (_mod6434(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1305("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod6435;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6436) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6436(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

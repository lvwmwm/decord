// Module ID: 6639
// Function ID: 6640
// Dependencies: [6640, 1293, 6641, 6642]

// Module 6639
import _mod6640 from "module_6640" /* 6640 */;
import _mod6641 from "module_6641" /* 6641 */;
import _mod6642 from "module_6642" /* 6642 */;

let setProto;
let tmp;
const _mod1293 = tmp(1293);
if (_mod6640) {
  setProto = function setProto(arg0, arg1) {
    if (_mod6640(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1293("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod6641;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6642) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6642(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

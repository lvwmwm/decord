// Module ID: 6624
// Function ID: 6625
// Dependencies: [6625, 1293, 6626, 6627]

// Module 6624
import _mod6625 from "module_6625" /* 6625 */;
import _mod6626 from "module_6626" /* 6626 */;
import _mod6627 from "module_6627" /* 6627 */;

let setProto;
let tmp;
const _mod1293 = tmp(1293);
if (_mod6625) {
  setProto = function setProto(arg0, arg1) {
    if (_mod6625(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1293("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod6626;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6627) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6627(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

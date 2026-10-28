// Module ID: 6464
// Function ID: 6465
// Dependencies: [6465, 1308, 6466, 6467]

// Module 6464
import _mod6465 from "module_6465" /* 6465 */;
import _mod6466 from "module_6466" /* 6466 */;
import _mod6467 from "module_6467" /* 6467 */;

let setProto;
let tmp;
const _mod1308 = tmp(1308);
if (_mod6465) {
  setProto = function setProto(arg0, arg1) {
    if (_mod6465(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod6466;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6467) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6467(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

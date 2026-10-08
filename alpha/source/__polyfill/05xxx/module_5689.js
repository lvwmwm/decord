// Module ID: 5689
// Function ID: 5690
// Dependencies: [5690, 1305, 5691, 5692]

// Module 5689
import _mod5690 from "module_5690" /* 5690 */;
import _mod5691 from "module_5691" /* 5691 */;
import _mod5692 from "module_5692" /* 5692 */;

let setProto;
let tmp;
const _mod1305 = tmp(1305);
if (_mod5690) {
  setProto = function setProto(arg0, arg1) {
    if (_mod5690(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1305("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod5691;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5692) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5692(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

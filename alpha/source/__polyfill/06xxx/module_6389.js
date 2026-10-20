// Module ID: 6389
// Function ID: 6390
// Dependencies: [6390, 1308, 6391, 6392]

// Module 6389
import _mod6390 from "module_6390" /* 6390 */;
import _mod6391 from "module_6391" /* 6391 */;
import _mod6392 from "module_6392" /* 6392 */;

let setProto;
let tmp;
const _mod1308 = tmp(1308);
if (_mod6390) {
  setProto = function setProto(arg0, arg1) {
    if (_mod6390(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod6391;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6392) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6392(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

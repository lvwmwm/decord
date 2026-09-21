// Module ID: 5048
// Function ID: 5049
// Dependencies: [5049, 1286, 5050, 5051]

// Module 5048
import _mod5049 from "module_5049" /* 5049 */;
import _mod5050 from "module_5050" /* 5050 */;
import _mod5051 from "module_5051" /* 5051 */;

const _mod1286 = tmp(1286);
if (_mod5049) {
  function setProto(arg0, arg1) {
    if (_mod5049(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1286("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5050;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5051) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5051(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

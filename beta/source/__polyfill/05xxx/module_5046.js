// Module ID: 5046
// Function ID: 5047
// Dependencies: [5047, 1282, 5048, 5049]

// Module 5046
import _mod5047 from "module_5047" /* 5047 */;
import _mod5048 from "module_5048" /* 5048 */;
import _mod5049 from "module_5049" /* 5049 */;

const _mod1282 = tmp(1282);
if (_mod5047) {
  function setProto(arg0, arg1) {
    if (_mod5047(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5048;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5049) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5049(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

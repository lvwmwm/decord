// Module ID: 4812
// Function ID: 4813
// Name: setProto
// Dependencies: [4813, 538, 4814, 4815]

// Module 4812 (setProto)
import _mod538 from "module_538" /* 538 */;
import setPrototypeOf from "setPrototypeOf" /* 4813 */;
import _mod4814 from "module_4814" /* 4814 */;
import _mod4815 from "module_4815" /* 4815 */;

if (setPrototypeOf) {
  function setProto(arg0, arg1) {
    if (setPrototypeOf(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod538("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
    const tmp = require;
  }
} else {
  setProto = _mod4814;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4815) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4815(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

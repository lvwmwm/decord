// Module ID: 4453
// Function ID: 39017
// Name: setProto
// Dependencies: [4454, 518, 4455, 4456]

// Module 4453 (setProto)
if (require("setPrototypeOf")) {
  function setProto(arg0, arg1) {
    if (require(4454) /* setPrototypeOf */(arg0, arg1)) {
      return arg0;
    } else {
      let tmp3 = require(518);
      const prototype = tmp3.prototype;
      tmp3 = new tmp3("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  }
} else {
  setProto = require("module_4455");
  if (!setProto) {
    let setProto2 = null;
    if (require("module_4456")) {
      setProto2 = function setProto(arg0, arg1) {
        require(4456)(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

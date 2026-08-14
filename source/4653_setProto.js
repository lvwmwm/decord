// Module ID: 4653
// Function ID: 4654
// Name: setProto
// Dependencies: [4654, 541, 4655, 4656]

// Module 4653 (setProto)
if (require("setPrototypeOf")) {
  function setProto(arg0, arg1) {
    if (require(4654) /* setPrototypeOf */(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new tmp(541)("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
    tmp = require;
  }
} else {
  setProto = require("module_4655");
  if (!setProto) {
    let setProto2 = null;
    if (require("module_4656")) {
      setProto2 = function setProto(arg0, arg1) {
        require(4656)(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

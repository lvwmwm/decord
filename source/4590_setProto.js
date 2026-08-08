// Module ID: 4590
// Function ID: 4591
// Name: setProto
// Dependencies: [4591, 541, 4592, 4593]

// Module 4590 (setProto)
if (require("setPrototypeOf")) {
  function setProto(arg0, arg1) {
    if (require(4591) /* setPrototypeOf */(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new tmp(541)("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
    tmp = require;
  }
} else {
  setProto = require("module_4592");
  if (!setProto) {
    let setProto2 = null;
    if (require("module_4593")) {
      setProto2 = function setProto(arg0, arg1) {
        require(4593)(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

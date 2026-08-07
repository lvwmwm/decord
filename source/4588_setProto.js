// Module ID: 4588
// Function ID: 4589
// Name: setProto
// Dependencies: [4589, 541, 4590, 4591]

// Module 4588 (setProto)
if (require("setPrototypeOf")) {
  function setProto(arg0, arg1) {
    if (require(4589) /* setPrototypeOf */(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new tmp(541)("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
    tmp = require;
  }
} else {
  setProto = require("module_4590");
  if (!setProto) {
    let setProto2 = null;
    if (require("module_4591")) {
      setProto2 = function setProto(arg0, arg1) {
        require(4591)(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

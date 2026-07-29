// Module ID: 4476
// Function ID: 4477
// Name: setProto
// Dependencies: [4477, 541, 4478, 4479]

// Module 4476 (setProto)
if (require("setPrototypeOf")) {
  function setProto(arg0, arg1) {
    if (require(4477) /* setPrototypeOf */(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new tmp(541)("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
    tmp = require;
  }
} else {
  setProto = require("module_4478");
  if (!setProto) {
    let setProto2 = null;
    if (require("module_4479")) {
      setProto2 = function setProto(arg0, arg1) {
        require(4479)(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

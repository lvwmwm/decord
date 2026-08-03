// Module ID: 4542
// Function ID: 4543
// Name: setProto
// Dependencies: [4543, 541, 4544, 4545]

// Module 4542 (setProto)
if (require("setPrototypeOf")) {
  function setProto(arg0, arg1) {
    if (require(4543) /* setPrototypeOf */(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new tmp(541)("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
    tmp = require;
  }
} else {
  setProto = require("module_4544");
  if (!setProto) {
    let setProto2 = null;
    if (require("module_4545")) {
      setProto2 = function setProto(arg0, arg1) {
        require(4545)(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

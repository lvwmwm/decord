// Module ID: 4433
// Function ID: 4434
// Name: setProto
// Dependencies: [4434, 541, 4435, 4436]

// Module 4433 (setProto)
if (require("setPrototypeOf")) {
  function setProto(arg0, arg1) {
    if (require(4434) /* setPrototypeOf */(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new tmp(541)("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
    tmp = require;
  }
} else {
  setProto = require("module_4435");
  if (!setProto) {
    let setProto2 = null;
    if (require("module_4436")) {
      setProto2 = function setProto(arg0, arg1) {
        require(4436)(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

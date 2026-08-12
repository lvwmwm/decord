// Module ID: 4630
// Function ID: 4631
// Name: setProto
// Dependencies: [4631, 541, 4632, 4633]

// Module 4630 (setProto)
if (require("setPrototypeOf")) {
  function setProto(arg0, arg1) {
    if (require(4631) /* setPrototypeOf */(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new tmp(541)("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
    tmp = require;
  }
} else {
  setProto = require("module_4632");
  if (!setProto) {
    let setProto2 = null;
    if (require("module_4633")) {
      setProto2 = function setProto(arg0, arg1) {
        require(4633)(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

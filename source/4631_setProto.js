// Module ID: 4631
// Function ID: 4632
// Name: setProto
// Dependencies: [4632, 541, 4633, 4634]

// Module 4631 (setProto)
if (require("setPrototypeOf")) {
  function setProto(arg0, arg1) {
    if (require(4632) /* setPrototypeOf */(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new tmp(541)("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
    tmp = require;
  }
} else {
  setProto = require("module_4633");
  if (!setProto) {
    let setProto2 = null;
    if (require("module_4634")) {
      setProto2 = function setProto(arg0, arg1) {
        require(4634)(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

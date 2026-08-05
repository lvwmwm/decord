// Module ID: 4541
// Function ID: 4542
// Name: setProto
// Dependencies: [4542, 541, 4543, 4544]

// Module 4541 (setProto)
if (require("setPrototypeOf")) {
  function setProto(arg0, arg1) {
    if (require(4542) /* setPrototypeOf */(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new tmp(541)("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
    tmp = require;
  }
} else {
  setProto = require("module_4543");
  if (!setProto) {
    let setProto2 = null;
    if (require("module_4544")) {
      setProto2 = function setProto(arg0, arg1) {
        require(4544)(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

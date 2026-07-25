// Module ID: 4419
// Function ID: 38902
// Name: setProto
// Dependencies: [4420, 518, 4421, 4422]

// Module 4419 (setProto)
if (require("setPrototypeOf")) {
  function setProto(arg0, arg1) {
    if (require(4420) /* setPrototypeOf */(arg0, arg1)) {
      return arg0;
    } else {
      let tmp3 = require(518);
      const prototype = tmp3.prototype;
      tmp3 = new tmp3("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  }
} else {
  setProto = require("module_4421");
  if (!setProto) {
    let setProto2 = null;
    if (require("module_4422")) {
      setProto2 = function setProto(arg0, arg1) {
        require(4422)(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

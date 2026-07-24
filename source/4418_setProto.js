// Module ID: 4418
// Function ID: 38891
// Name: setProto
// Dependencies: [4419, 518, 4420, 4421]

// Module 4418 (setProto)
if (require("setPrototypeOf")) {
  function setProto(arg0, arg1) {
    if (require(4419) /* setPrototypeOf */(arg0, arg1)) {
      return arg0;
    } else {
      let tmp3 = require(518);
      const prototype = tmp3.prototype;
      tmp3 = new tmp3("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  }
} else {
  setProto = require("module_4420");
  if (!setProto) {
    let setProto2 = null;
    if (require("module_4421")) {
      setProto2 = function setProto(arg0, arg1) {
        require(4421)(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

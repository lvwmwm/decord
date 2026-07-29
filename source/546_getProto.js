// Module ID: 546
// Function ID: 547
// Name: getProto
// Dependencies: [547, 548, 550]

// Module 546 (getProto)
if (require("getPrototypeOf")) {
  function getProto(arg0) {
    return require(547) /* getPrototypeOf */(arg0);
  }
} else if (require("module_548")) {
  getProto = function getProto(arg0) {
    if (arg0) {
      return require(548)(arg0);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (require("module_550")) {
    getProto = function getProto(arg0) {
      return require(550)(arg0);
    };
  }
}

export default getProto;

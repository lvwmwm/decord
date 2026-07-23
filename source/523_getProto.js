// Module ID: 523
// Function ID: 6628
// Name: getProto
// Dependencies: [524, 525, 527]

// Module 523 (getProto)
if (require("getPrototypeOf")) {
  function getProto(arg0) {
    return require(524) /* getPrototypeOf */(arg0);
  }
} else if (require("module_525")) {
  getProto = function getProto(arg0) {
    if (arg0) {
      return require(525)(arg0);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (require("module_527")) {
    getProto = function getProto(arg0) {
      return require(527)(arg0);
    };
  }
}

export default getProto;

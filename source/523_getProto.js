// Module ID: 523
// Function ID: 6628
// Name: getProto
// Dependencies: []

// Module 523 (getProto)
if (require(dependencyMap[0])) {
  function getProto(arg0) {
    return require(dependencyMap[0])(arg0);
  }
} else if (require(dependencyMap[1])) {
  getProto = function getProto(arg0) {
    if (arg0) {
      return require(dependencyMap[1])(arg0);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (require(dependencyMap[2])) {
    getProto = function getProto(arg0) {
      return require(dependencyMap[2])(arg0);
    };
  }
}

export default getProto;

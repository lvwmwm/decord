// Module ID: 4414
// Function ID: 38850
// Name: setProto
// Dependencies: []

// Module 4414 (setProto)
if (require(dependencyMap[0])) {
  function setProto(arg0, arg1) {
    if (require(dependencyMap[0])(arg0, arg1)) {
      return arg0;
    } else {
      let tmp3 = require(dependencyMap[1]);
      const prototype = tmp3.prototype;
      tmp3 = new tmp3("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  }
} else {
  setProto = require(dependencyMap[2]);
  if (!setProto) {
    let setProto2 = null;
    if (require(dependencyMap[3])) {
      setProto2 = function setProto(arg0, arg1) {
        require(dependencyMap[3])(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

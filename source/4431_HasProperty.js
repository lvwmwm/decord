// Module ID: 4431
// Function ID: 38877
// Name: HasProperty
// Dependencies: []

// Module 4431 (HasProperty)

export default function HasProperty(arg0, arg1) {
  if (require(dependencyMap[0])(arg0)) {
    if (tmp(tmp2[2])(arg1)) {
      return arg1 in arg0;
    } else {
      let tmp10 = require(dependencyMap[1]);
      const prototype2 = tmp10.prototype;
      tmp10 = new tmp10("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    let tmpResult = tmp(tmp2[1]);
    const prototype = tmpResult.prototype;
    tmpResult = new tmpResult("Assertion failed: `O` must be an Object");
    throw tmpResult;
  }
};

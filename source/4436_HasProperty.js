// Module ID: 4436
// Function ID: 38937
// Name: HasProperty
// Dependencies: [4377, 518, 4424]

// Module 4436 (HasProperty)

export default function HasProperty(arg0, arg1) {
  if (require(4377) /* isObject */(arg0)) {
    if (tmp(4424)(arg1)) {
      return arg1 in arg0;
    } else {
      let tmp10 = require(518);
      const prototype2 = tmp10.prototype;
      tmp10 = new tmp10("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    let tmpResult = tmp(518);
    const prototype = tmpResult.prototype;
    tmpResult = new tmpResult("Assertion failed: `O` must be an Object");
    throw tmpResult;
  }
};

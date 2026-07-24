// Module ID: 4435
// Function ID: 38926
// Name: HasProperty
// Dependencies: [4376, 518, 4423]

// Module 4435 (HasProperty)

export default function HasProperty(arg0, arg1) {
  if (require(4376) /* isObject */(arg0)) {
    if (tmp(4423)(arg1)) {
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

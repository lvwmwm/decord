// Module ID: 4422
// Function ID: 38897
// Name: Get
// Dependencies: [4376, 518, 4423, 552]

// Module 4422 (Get)

export default function Get(arg0, arg1) {
  if (require(4376) /* isObject */(arg0)) {
    if (tmp(4423)(arg1)) {
      return arg0[arg1];
    } else {
      let tmp10 = require(518);
      const prototype2 = tmp10.prototype;
      tmp10 = new tmp10("Assertion failed: P is not a Property Key, got " + require(552) /* addNumericSeparator */(arg1));
      throw tmp10;
    }
  } else {
    let tmpResult = tmp(518);
    const prototype = tmpResult.prototype;
    tmpResult = new tmpResult("Assertion failed: Type(O) is not Object");
    throw tmpResult;
  }
};

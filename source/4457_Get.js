// Module ID: 4457
// Function ID: 39024
// Name: Get
// Dependencies: [4411, 518, 4458, 552]

// Module 4457 (Get)

export default function Get(arg0, arg1) {
  if (require(4411) /* isObject */(arg0)) {
    if (tmp(4458)(arg1)) {
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

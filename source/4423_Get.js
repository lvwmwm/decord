// Module ID: 4423
// Function ID: 38910
// Name: Get
// Dependencies: [4377, 518, 4424, 552]

// Module 4423 (Get)

export default function Get(arg0, arg1) {
  if (require(4377) /* isObject */(arg0)) {
    if (tmp(4424)(arg1)) {
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

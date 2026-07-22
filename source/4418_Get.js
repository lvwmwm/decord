// Module ID: 4418
// Function ID: 38865
// Name: Get
// Dependencies: []

// Module 4418 (Get)

export default function Get(arg0, arg1) {
  if (require(dependencyMap[0])(arg0)) {
    if (tmp(tmp2[2])(arg1)) {
      return arg0[arg1];
    } else {
      let tmp10 = require(dependencyMap[1]);
      const prototype2 = tmp10.prototype;
      tmp10 = new tmp10("Assertion failed: P is not a Property Key, got " + require(dependencyMap[3])(arg1));
      throw tmp10;
    }
  } else {
    let tmpResult = tmp(tmp2[1]);
    const prototype = tmpResult.prototype;
    tmpResult = new tmpResult("Assertion failed: Type(O) is not Object");
    throw tmpResult;
  }
};

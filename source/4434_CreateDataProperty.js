// Module ID: 4434
// Function ID: 38891
// Name: CreateDataProperty
// Dependencies: []

// Module 4434 (CreateDataProperty)

export default function CreateDataProperty(arg0, arg1, [[Value]]) {
  if (require(dependencyMap[0])(arg0)) {
    if (tmp(tmp2[2])(arg1)) {
      const obj = { <string:70859074>: "gif", <string:72142592>: "png", <string:3267580416>: 500, <string:541175615>: 1000, [[Value]] };
      return require(dependencyMap[3])(arg0, arg1, obj);
    } else {
      let tmp10 = require(dependencyMap[1]);
      const prototype2 = tmp10.prototype;
      tmp10 = new tmp10("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    let tmpResult = tmp(tmp2[1]);
    const prototype = tmpResult.prototype;
    tmpResult = new tmpResult("Assertion failed: Type(O) is not Object");
    throw tmpResult;
  }
};

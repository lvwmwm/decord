// Module ID: 4438
// Function ID: 38931
// Name: CreateDataProperty
// Dependencies: [4376, 518, 4423, 4439]

// Module 4438 (CreateDataProperty)

export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (require(4376) /* isObject */(arg0)) {
    if (tmp(4423)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return require(4439) /* OrdinaryDefineOwnProperty */(arg0, arg1, obj);
    } else {
      let tmp10 = require(518);
      const prototype2 = tmp10.prototype;
      tmp10 = new tmp10("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    let tmpResult = tmp(518);
    const prototype = tmpResult.prototype;
    tmpResult = new tmpResult("Assertion failed: Type(O) is not Object");
    throw tmpResult;
  }
};

// Module ID: 4439
// Function ID: 38944
// Name: CreateDataProperty
// Dependencies: [4377, 518, 4424, 4440]

// Module 4439 (CreateDataProperty)

export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (require(4377) /* isObject */(arg0)) {
    if (tmp(4424)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return require(4440) /* OrdinaryDefineOwnProperty */(arg0, arg1, obj);
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

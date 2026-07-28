// Module ID: 4473
// Function ID: 39058
// Name: CreateDataProperty
// Dependencies: [4411, 518, 4458, 4474]

// Module 4473 (CreateDataProperty)

export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (require(4411) /* isObject */(arg0)) {
    if (tmp(4458)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return require(4474) /* OrdinaryDefineOwnProperty */(arg0, arg1, obj);
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

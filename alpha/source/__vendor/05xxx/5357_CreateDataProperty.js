// Module ID: 5357
// Function ID: 5358
// Name: CreateDataProperty
// Dependencies: [5295, 1282, 5342, 5358]

// Module 5357 (CreateDataProperty)
import _mod5295 from "module_5295" /* 5295 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5295(arg0)) {
    if (tmp(5342)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(5358)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};

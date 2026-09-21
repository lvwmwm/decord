// Module ID: 5068
// Function ID: 5069
// Name: CreateDataProperty
// Dependencies: [5006, 1286, 5053, 5069]

// Module 5068 (CreateDataProperty)
import _mod5006 from "module_5006" /* 5006 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5006(arg0)) {
    if (tmp(5053)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(5069)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1286)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1286)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};

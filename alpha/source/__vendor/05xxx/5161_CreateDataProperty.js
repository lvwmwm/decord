// Module ID: 5161
// Function ID: 5162
// Name: CreateDataProperty
// Dependencies: [5099, 1282, 5146, 5162]

// Module 5161 (CreateDataProperty)
import _mod5099 from "module_5099" /* 5099 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5099(arg0)) {
    if (tmp(5146)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(5162)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};

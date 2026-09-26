// Module ID: 5098
// Function ID: 5099
// Name: CreateDataProperty
// Dependencies: [5036, 1282, 5083, 5099]

// Module 5098 (CreateDataProperty)
import _mod5036 from "module_5036" /* 5036 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5036(arg0)) {
    if (tmp(5083)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(5099)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};

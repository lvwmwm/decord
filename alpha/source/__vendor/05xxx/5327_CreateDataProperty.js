// Module ID: 5327
// Function ID: 5328
// Name: CreateDataProperty
// Dependencies: [5265, 1282, 5312, 5328]

// Module 5327 (CreateDataProperty)
import _mod5265 from "module_5265" /* 5265 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5265(arg0)) {
    if (tmp(5312)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(5328)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};

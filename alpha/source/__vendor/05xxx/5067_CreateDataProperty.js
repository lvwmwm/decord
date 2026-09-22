// Module ID: 5067
// Function ID: 5068
// Name: CreateDataProperty
// Dependencies: [5005, 1282, 5052, 5068]

// Module 5067 (CreateDataProperty)
import _mod5005 from "module_5005" /* 5005 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5005(arg0)) {
    if (tmp(5052)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(5068)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};

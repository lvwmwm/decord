// Module ID: 4947
// Function ID: 4948
// Name: CreateDataProperty
// Dependencies: [4885, 1281, 4932, 4948]

// Module 4947 (CreateDataProperty)
import _mod4885 from "module_4885" /* 4885 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4885(arg0)) {
    if (tmp(4932)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(4948)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1281)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1281)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};

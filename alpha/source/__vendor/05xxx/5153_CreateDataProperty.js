// Module ID: 5153
// Function ID: 5154
// Name: CreateDataProperty
// Dependencies: [5091, 1282, 5138, 5154]

// Module 5153 (CreateDataProperty)
import _mod5091 from "module_5091" /* 5091 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5091(arg0)) {
    if (tmp(5138)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(5154)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};

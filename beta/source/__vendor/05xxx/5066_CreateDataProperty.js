// Module ID: 5066
// Function ID: 5067
// Name: CreateDataProperty
// Dependencies: [5004, 1282, 5051, 5067]

// Module 5066 (CreateDataProperty)
import _mod5004 from "module_5004" /* 5004 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5004(arg0)) {
    if (tmp(5051)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(5067)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};

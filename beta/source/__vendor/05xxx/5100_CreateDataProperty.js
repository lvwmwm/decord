// Module ID: 5100
// Function ID: 5101
// Name: CreateDataProperty
// Dependencies: [5038, 1286, 5085, 5101]

// Module 5100 (CreateDataProperty)
import _mod5038 from "module_5038" /* 5038 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5038(arg0)) {
    if (tmp(5085)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(5101)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1286)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1286)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};

// Module ID: 5154
// Function ID: 5155
// Name: CreateDataProperty
// Dependencies: [5092, 1282, 5139, 5155]

// Module 5154 (CreateDataProperty)
import _mod5092 from "module_5092" /* 5092 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5092(arg0)) {
    if (tmp(5139)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(5155)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};

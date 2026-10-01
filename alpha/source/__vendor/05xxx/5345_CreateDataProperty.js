// Module ID: 5345
// Function ID: 5346
// Name: CreateDataProperty
// Dependencies: [5283, 1282, 5330, 5346]

// Module 5345 (CreateDataProperty)
import _mod5283 from "module_5283" /* 5283 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5283(arg0)) {
    if (tmp(5330)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(5346)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};

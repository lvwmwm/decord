// Module ID: 5151
// Function ID: 5152
// Name: CreateDataProperty
// Dependencies: [5089, 1282, 5136, 5152]

// Module 5151 (CreateDataProperty)
import _mod5089 from "module_5089" /* 5089 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5089(arg0)) {
    if (tmp(5136)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(5152)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};

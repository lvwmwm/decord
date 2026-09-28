// Module ID: 5160
// Function ID: 5161
// Name: CreateDataPropertyOrThrow
// Dependencies: [5099, 1282, 5146, 5161]

// Module 5160 (CreateDataPropertyOrThrow)
import _mod5099 from "module_5099" /* 5099 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5099(arg0)) {
    if (tmp(5146)(arg1)) {
      if (!tmp(5161)(arg0, arg1, arg2)) {
        const tmp15 = new tmp(1282)("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};

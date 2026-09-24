// Module ID: 5152
// Function ID: 5153
// Name: CreateDataPropertyOrThrow
// Dependencies: [5091, 1282, 5138, 5153]

// Module 5152 (CreateDataPropertyOrThrow)
import _mod5091 from "module_5091" /* 5091 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5091(arg0)) {
    if (tmp(5138)(arg1)) {
      if (!tmp(5153)(arg0, arg1, arg2)) {
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

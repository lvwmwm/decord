// Module ID: 5067
// Function ID: 5068
// Name: CreateDataPropertyOrThrow
// Dependencies: [5006, 1286, 5053, 5068]

// Module 5067 (CreateDataPropertyOrThrow)
import _mod5006 from "module_5006" /* 5006 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5006(arg0)) {
    if (tmp(5053)(arg1)) {
      if (!tmp(5068)(arg0, arg1, arg2)) {
        const tmp15 = new tmp(1286)("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new tmp(1286)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1286)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};

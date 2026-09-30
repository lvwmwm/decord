// Module ID: 5356
// Function ID: 5357
// Name: CreateDataPropertyOrThrow
// Dependencies: [5295, 1282, 5342, 5357]

// Module 5356 (CreateDataPropertyOrThrow)
import _mod5295 from "module_5295" /* 5295 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5295(arg0)) {
    if (tmp(5342)(arg1)) {
      if (!tmp(5357)(arg0, arg1, arg2)) {
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

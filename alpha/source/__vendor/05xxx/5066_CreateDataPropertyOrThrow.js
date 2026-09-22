// Module ID: 5066
// Function ID: 5067
// Name: CreateDataPropertyOrThrow
// Dependencies: [5005, 1282, 5052, 5067]

// Module 5066 (CreateDataPropertyOrThrow)
import _mod5005 from "module_5005" /* 5005 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5005(arg0)) {
    if (tmp(5052)(arg1)) {
      if (!tmp(5067)(arg0, arg1, arg2)) {
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

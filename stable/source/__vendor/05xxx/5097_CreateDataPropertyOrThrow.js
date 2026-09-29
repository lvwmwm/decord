// Module ID: 5097
// Function ID: 5098
// Name: CreateDataPropertyOrThrow
// Dependencies: [5036, 1282, 5083, 5098]

// Module 5097 (CreateDataPropertyOrThrow)
import _mod5036 from "module_5036" /* 5036 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5036(arg0)) {
    if (tmp(5083)(arg1)) {
      if (!tmp(5098)(arg0, arg1, arg2)) {
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

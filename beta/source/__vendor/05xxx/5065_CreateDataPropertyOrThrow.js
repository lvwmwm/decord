// Module ID: 5065
// Function ID: 5066
// Name: CreateDataPropertyOrThrow
// Dependencies: [5004, 1282, 5051, 5066]

// Module 5065 (CreateDataPropertyOrThrow)
import _mod5004 from "module_5004" /* 5004 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5004(arg0)) {
    if (tmp(5051)(arg1)) {
      if (!tmp(5066)(arg0, arg1, arg2)) {
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

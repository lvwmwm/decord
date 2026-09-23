// Module ID: 5150
// Function ID: 5151
// Name: CreateDataPropertyOrThrow
// Dependencies: [5089, 1282, 5136, 5151]

// Module 5150 (CreateDataPropertyOrThrow)
import _mod5089 from "module_5089" /* 5089 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5089(arg0)) {
    if (tmp(5136)(arg1)) {
      if (!tmp(5151)(arg0, arg1, arg2)) {
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

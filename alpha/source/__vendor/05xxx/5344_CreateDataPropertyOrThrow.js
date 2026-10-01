// Module ID: 5344
// Function ID: 5345
// Name: CreateDataPropertyOrThrow
// Dependencies: [5283, 1282, 5330, 5345]

// Module 5344 (CreateDataPropertyOrThrow)
import _mod5283 from "module_5283" /* 5283 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5283(arg0)) {
    if (tmp(5330)(arg1)) {
      if (!tmp(5345)(arg0, arg1, arg2)) {
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

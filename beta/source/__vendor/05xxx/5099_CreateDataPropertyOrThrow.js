// Module ID: 5099
// Function ID: 5100
// Name: CreateDataPropertyOrThrow
// Dependencies: [5038, 1286, 5085, 5100]

// Module 5099 (CreateDataPropertyOrThrow)
import _mod5038 from "module_5038" /* 5038 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5038(arg0)) {
    if (tmp(5085)(arg1)) {
      if (!tmp(5100)(arg0, arg1, arg2)) {
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

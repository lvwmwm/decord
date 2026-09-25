// Module ID: 5153
// Function ID: 5154
// Name: CreateDataPropertyOrThrow
// Dependencies: [5092, 1282, 5139, 5154]

// Module 5153 (CreateDataPropertyOrThrow)
import _mod5092 from "module_5092" /* 5092 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5092(arg0)) {
    if (tmp(5139)(arg1)) {
      if (!tmp(5154)(arg0, arg1, arg2)) {
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

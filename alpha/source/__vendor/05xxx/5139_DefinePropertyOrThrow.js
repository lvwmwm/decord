// Module ID: 5139
// Function ID: 5140
// Name: DefinePropertyOrThrow
// Dependencies: [5089, 1282, 5136, 5140, 5141, 5143, 5144, 5145, 5146]

// Module 5139 (DefinePropertyOrThrow)
import _mod5089 from "module_5089" /* 5089 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5089(arg0)) {
    if (tmp(5136)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(5140)(arg2)) {
        tmp13 = tmp(5141)(arg2);
      }
      if (tmp(5140)(tmp13)) {
        const tmpResult3 = tmp(5144);
        const tmpResult = tmp(5143);
        return tmpResult(tmpResult3, tmp(5145), tmp(5146), arg0, arg1, tmp14);
      } else {
        const tmp17 = new tmp(1282)("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
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

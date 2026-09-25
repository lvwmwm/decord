// Module ID: 5142
// Function ID: 5143
// Name: DefinePropertyOrThrow
// Dependencies: [5092, 1282, 5139, 5143, 5144, 5146, 5147, 5148, 5149]

// Module 5142 (DefinePropertyOrThrow)
import _mod5092 from "module_5092" /* 5092 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5092(arg0)) {
    if (tmp(5139)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(5143)(arg2)) {
        tmp13 = tmp(5144)(arg2);
      }
      if (tmp(5143)(tmp13)) {
        const tmpResult3 = tmp(5147);
        const tmpResult = tmp(5146);
        return tmpResult(tmpResult3, tmp(5148), tmp(5149), arg0, arg1, tmp14);
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

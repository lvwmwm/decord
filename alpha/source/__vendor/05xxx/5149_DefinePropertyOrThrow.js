// Module ID: 5149
// Function ID: 5150
// Name: DefinePropertyOrThrow
// Dependencies: [5099, 1282, 5146, 5150, 5151, 5153, 5154, 5155, 5156]

// Module 5149 (DefinePropertyOrThrow)
import _mod5099 from "module_5099" /* 5099 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5099(arg0)) {
    if (tmp(5146)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(5150)(arg2)) {
        tmp13 = tmp(5151)(arg2);
      }
      if (tmp(5150)(tmp13)) {
        const tmpResult3 = tmp(5154);
        const tmpResult = tmp(5153);
        return tmpResult(tmpResult3, tmp(5155), tmp(5156), arg0, arg1, tmp14);
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

// Module ID: 5088
// Function ID: 5089
// Name: DefinePropertyOrThrow
// Dependencies: [5038, 1286, 5085, 5089, 5090, 5092, 5093, 5094, 5095]

// Module 5088 (DefinePropertyOrThrow)
import _mod5038 from "module_5038" /* 5038 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5038(arg0)) {
    if (tmp(5085)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(5089)(arg2)) {
        tmp13 = tmp(5090)(arg2);
      }
      if (tmp(5089)(tmp13)) {
        const tmpResult3 = tmp(5093);
        const tmpResult = tmp(5092);
        return tmpResult(tmpResult3, tmp(5094), tmp(5095), arg0, arg1, tmp14);
      } else {
        const tmp17 = new tmp(1286)("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
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

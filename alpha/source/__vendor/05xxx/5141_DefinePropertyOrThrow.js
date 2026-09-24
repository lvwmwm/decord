// Module ID: 5141
// Function ID: 5142
// Name: DefinePropertyOrThrow
// Dependencies: [5091, 1282, 5138, 5142, 5143, 5145, 5146, 5147, 5148]

// Module 5141 (DefinePropertyOrThrow)
import _mod5091 from "module_5091" /* 5091 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5091(arg0)) {
    if (tmp(5138)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(5142)(arg2)) {
        tmp13 = tmp(5143)(arg2);
      }
      if (tmp(5142)(tmp13)) {
        const tmpResult3 = tmp(5146);
        const tmpResult = tmp(5145);
        return tmpResult(tmpResult3, tmp(5147), tmp(5148), arg0, arg1, tmp14);
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

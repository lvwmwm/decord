// Module ID: 5315
// Function ID: 5316
// Name: DefinePropertyOrThrow
// Dependencies: [5265, 1282, 5312, 5316, 5317, 5319, 5320, 5321, 5322]

// Module 5315 (DefinePropertyOrThrow)
import _mod5265 from "module_5265" /* 5265 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5265(arg0)) {
    if (tmp(5312)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(5316)(arg2)) {
        tmp13 = tmp(5317)(arg2);
      }
      if (tmp(5316)(tmp13)) {
        const tmpResult3 = tmp(5320);
        const tmpResult = tmp(5319);
        return tmpResult(tmpResult3, tmp(5321), tmp(5322), arg0, arg1, tmp14);
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

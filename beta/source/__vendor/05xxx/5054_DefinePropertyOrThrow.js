// Module ID: 5054
// Function ID: 5055
// Name: DefinePropertyOrThrow
// Dependencies: [5004, 1282, 5051, 5055, 5056, 5058, 5059, 5060, 5061]

// Module 5054 (DefinePropertyOrThrow)
import _mod5004 from "module_5004" /* 5004 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5004(arg0)) {
    if (tmp(5051)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(5055)(arg2)) {
        tmp13 = tmp(5056)(arg2);
      }
      if (tmp(5055)(tmp13)) {
        const tmpResult3 = tmp(5059);
        const tmpResult = tmp(5058);
        return tmpResult(tmpResult3, tmp(5060), tmp(5061), arg0, arg1, tmp14);
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

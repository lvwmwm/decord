// Module ID: 5055
// Function ID: 5056
// Name: DefinePropertyOrThrow
// Dependencies: [5005, 1282, 5052, 5056, 5057, 5059, 5060, 5061, 5062]

// Module 5055 (DefinePropertyOrThrow)
import _mod5005 from "module_5005" /* 5005 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5005(arg0)) {
    if (tmp(5052)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(5056)(arg2)) {
        tmp13 = tmp(5057)(arg2);
      }
      if (tmp(5056)(tmp13)) {
        const tmpResult3 = tmp(5060);
        const tmpResult = tmp(5059);
        return tmpResult(tmpResult3, tmp(5061), tmp(5062), arg0, arg1, tmp14);
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

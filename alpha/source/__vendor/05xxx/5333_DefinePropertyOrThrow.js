// Module ID: 5333
// Function ID: 5334
// Name: DefinePropertyOrThrow
// Dependencies: [5283, 1282, 5330, 5334, 5335, 5337, 5338, 5339, 5340]

// Module 5333 (DefinePropertyOrThrow)
import _mod5283 from "module_5283" /* 5283 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5283(arg0)) {
    if (tmp(5330)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(5334)(arg2)) {
        tmp13 = tmp(5335)(arg2);
      }
      if (tmp(5334)(tmp13)) {
        const tmpResult3 = tmp(5338);
        const tmpResult = tmp(5337);
        return tmpResult(tmpResult3, tmp(5339), tmp(5340), arg0, arg1, tmp14);
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

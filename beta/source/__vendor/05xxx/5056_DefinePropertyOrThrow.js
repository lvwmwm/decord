// Module ID: 5056
// Function ID: 5057
// Name: DefinePropertyOrThrow
// Dependencies: [5006, 1286, 5053, 5057, 5058, 5060, 5061, 5062, 5063]

// Module 5056 (DefinePropertyOrThrow)
import _mod5006 from "module_5006" /* 5006 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5006(arg0)) {
    if (tmp(5053)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(5057)(arg2)) {
        tmp13 = tmp(5058)(arg2);
      }
      if (tmp(5057)(tmp13)) {
        const tmpResult3 = tmp(5061);
        const tmpResult = tmp(5060);
        return tmpResult(tmpResult3, tmp(5062), tmp(5063), arg0, arg1, tmp14);
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

// Module ID: 5345
// Function ID: 5346
// Name: DefinePropertyOrThrow
// Dependencies: [5295, 1282, 5342, 5346, 5347, 5349, 5350, 5351, 5352]

// Module 5345 (DefinePropertyOrThrow)
import _mod5295 from "module_5295" /* 5295 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5295(arg0)) {
    if (tmp(5342)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(5346)(arg2)) {
        tmp13 = tmp(5347)(arg2);
      }
      if (tmp(5346)(tmp13)) {
        const tmpResult3 = tmp(5350);
        const tmpResult = tmp(5349);
        return tmpResult(tmpResult3, tmp(5351), tmp(5352), arg0, arg1, tmp14);
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

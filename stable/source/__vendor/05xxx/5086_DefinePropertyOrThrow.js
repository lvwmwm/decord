// Module ID: 5086
// Function ID: 5087
// Name: DefinePropertyOrThrow
// Dependencies: [5036, 1282, 5083, 5087, 5088, 5090, 5091, 5092, 5093]

// Module 5086 (DefinePropertyOrThrow)
import _mod5036 from "module_5036" /* 5036 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5036(arg0)) {
    if (tmp(5083)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(5087)(arg2)) {
        tmp13 = tmp(5088)(arg2);
      }
      if (tmp(5087)(tmp13)) {
        const tmpResult3 = tmp(5091);
        const tmpResult = tmp(5090);
        return tmpResult(tmpResult3, tmp(5092), tmp(5093), arg0, arg1, tmp14);
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

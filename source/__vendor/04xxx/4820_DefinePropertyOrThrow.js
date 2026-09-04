// Module ID: 4820
// Function ID: 4821
// Name: DefinePropertyOrThrow
// Dependencies: [4770, 538, 4817, 4821, 4822, 4824, 4825, 4826, 4827]

// Module 4820 (DefinePropertyOrThrow)
import isObject from "isObject" /* 4770 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (tmp(4817)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4821)(arg2)) {
        tmp13 = tmp(4822)(arg2);
      }
      if (tmp(4821)(tmp13)) {
        let tmpResult = tmp(4824);
        tmpResult = tmp(4825);
        return tmpResult(tmpResult, tmp(4826), tmp(4827), arg0, arg1, tmp14);
      } else {
        const tmp17 = new tmp(538)("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new tmp(538)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(538)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};

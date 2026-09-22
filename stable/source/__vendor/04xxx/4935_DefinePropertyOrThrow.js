// Module ID: 4935
// Function ID: 4936
// Name: DefinePropertyOrThrow
// Dependencies: [4885, 1281, 4932, 4936, 4937, 4939, 4940, 4941, 4942]

// Module 4935 (DefinePropertyOrThrow)
import _mod4885 from "module_4885" /* 4885 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4885(arg0)) {
    if (tmp(4932)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4936)(arg2)) {
        tmp13 = tmp(4937)(arg2);
      }
      if (tmp(4936)(tmp13)) {
        const tmpResult3 = tmp(4940);
        const tmpResult = tmp(4939);
        return tmpResult(tmpResult3, tmp(4941), tmp(4942), arg0, arg1, tmp14);
      } else {
        const tmp17 = new tmp(1281)("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new tmp(1281)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1281)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};

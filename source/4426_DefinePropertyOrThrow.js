// Module ID: 4426
// Function ID: 38908
// Name: DefinePropertyOrThrow
// Dependencies: [4376, 518, 4423, 4427, 4428, 4430, 4431, 4432, 4433]

// Module 4426 (DefinePropertyOrThrow)

export default function DefinePropertyOrThrow(arg0, length, arg2) {
  if (require(4376) /* isObject */(arg0)) {
    if (tmp(4423)(length)) {
      let tmp15 = arg2;
      if (!tmp8(4427)(arg2)) {
        tmp15 = require(4428) /* ToPropertyDescriptor */(arg2);
      }
      if (require(4427) /* isPropertyDescriptor */(tmp15)) {
        let tmp20Result = tmp20(4430);
        tmp20Result = tmp20(4431);
        return tmp20Result(tmp20Result, tmp20(4432), tmp20(4433), arg0, length, tmp22);
      } else {
        const tmp20Result2 = tmp20(518);
        const prototype3 = tmp20Result2.prototype;
        const tmp20Result3 = new tmp20Result2("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp20Result3;
      }
    } else {
      let tmp8Result = tmp8(518);
      const prototype2 = tmp8Result.prototype;
      tmp8Result = new tmp8Result("Assertion failed: P is not a Property Key");
      throw tmp8Result;
    }
  } else {
    let tmpResult = tmp(518);
    const prototype = tmpResult.prototype;
    tmpResult = new tmpResult("Assertion failed: Type(O) is not Object");
    throw tmpResult;
  }
};

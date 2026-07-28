// Module ID: 4461
// Function ID: 39034
// Name: DefinePropertyOrThrow
// Dependencies: [4411, 518, 4458, 4462, 4463, 4465, 4466, 4467, 4468]

// Module 4461 (DefinePropertyOrThrow)

export default function DefinePropertyOrThrow(arg0, length, arg2) {
  if (require(4411) /* isObject */(arg0)) {
    if (tmp(4458)(length)) {
      let tmp15 = arg2;
      if (!tmp8(4462)(arg2)) {
        tmp15 = require(4463) /* ToPropertyDescriptor */(arg2);
      }
      if (require(4462) /* isPropertyDescriptor */(tmp15)) {
        let tmp20Result = tmp20(4465);
        tmp20Result = tmp20(4466);
        return tmp20Result(tmp20Result, tmp20(4467), tmp20(4468), arg0, length, tmp22);
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

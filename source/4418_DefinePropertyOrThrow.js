// Module ID: 4418
// Function ID: 38811
// Name: DefinePropertyOrThrow
// Dependencies: []

// Module 4418 (DefinePropertyOrThrow)

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (require(dependencyMap[0])(arg0)) {
    if (tmp(tmp2[2])(arg1)) {
      let tmp15 = arg2;
      if (!tmp8(tmp9[3])(arg2)) {
        tmp15 = require(dependencyMap[4])(arg2);
      }
      if (require(dependencyMap[3])(tmp15)) {
        let tmp20Result = tmp20(tmp21[5]);
        tmp20Result = tmp20(tmp21[6]);
        return tmp20Result(tmp20Result, tmp20(tmp21[7]), tmp20(tmp21[8]), arg0, arg1, tmp22);
      } else {
        const tmp20Result2 = tmp20(tmp21[1]);
        const prototype3 = tmp20Result2.prototype;
        const tmp20Result3 = new tmp20Result2("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp20Result3;
      }
    } else {
      let tmp8Result = tmp8(tmp9[1]);
      const prototype2 = tmp8Result.prototype;
      tmp8Result = new tmp8Result("Assertion failed: P is not a Property Key");
      throw tmp8Result;
    }
  } else {
    let tmpResult = tmp(tmp2[1]);
    const prototype = tmpResult.prototype;
    tmpResult = new tmpResult("Assertion failed: Type(O) is not Object");
    throw tmpResult;
  }
};

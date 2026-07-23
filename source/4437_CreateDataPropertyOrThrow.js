// Module ID: 4437
// Function ID: 38929
// Name: CreateDataPropertyOrThrow
// Dependencies: [4376, 518, 4423, 4438]

// Module 4437 (CreateDataPropertyOrThrow)

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (require(4376) /* isObject */(arg0)) {
    if (tmp(4423)(arg1)) {
      if (!tmp8(4438)(arg0, arg1, arg2)) {
        let tmp18 = require(518);
        const prototype3 = tmp18.prototype;
        tmp18 = new tmp18("unable to create data property");
        throw tmp18;
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

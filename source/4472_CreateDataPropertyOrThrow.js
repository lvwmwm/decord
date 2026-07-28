// Module ID: 4472
// Function ID: 39056
// Name: CreateDataPropertyOrThrow
// Dependencies: [4411, 518, 4458, 4473]

// Module 4472 (CreateDataPropertyOrThrow)

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (require(4411) /* isObject */(arg0)) {
    if (tmp(4458)(arg1)) {
      if (!tmp8(4473)(arg0, arg1, arg2)) {
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

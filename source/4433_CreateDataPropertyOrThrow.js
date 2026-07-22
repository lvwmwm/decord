// Module ID: 4433
// Function ID: 38897
// Name: CreateDataPropertyOrThrow
// Dependencies: []

// Module 4433 (CreateDataPropertyOrThrow)

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (require(dependencyMap[0])(arg0)) {
    if (tmp(tmp2[2])(arg1)) {
      if (!tmp8(tmp9[3])(arg0, arg1, arg2)) {
        let tmp18 = require(dependencyMap[1]);
        const prototype3 = tmp18.prototype;
        tmp18 = new tmp18("unable to create data property");
        throw tmp18;
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

// Module ID: 4291
// Function ID: 37491
// Name: basePickBy
// Dependencies: []

// Module 4291 (basePickBy)

export default function basePickBy(arg0, arg1, arg2) {
  const obj = {};
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arg1[num];
    let tmp2 = require;
    let tmp3 = dependencyMap;
    let tmp4 = require(dependencyMap[0])(arg0, tmp);
    if (arg2(tmp4, tmp)) {
      let tmp5 = require;
      let tmp6 = dependencyMap;
      let tmp7 = require(dependencyMap[1]);
      let tmp7Result = tmp7(obj, require(dependencyMap[2])(tmp, arg0), tmp4);
    }
  }
  return obj;
};

// Module ID: 4295
// Function ID: 37539
// Name: basePickBy
// Dependencies: [704, 4296, 705]

// Module 4295 (basePickBy)

export default function basePickBy(arg0, arg1, arg2) {
  const obj = {};
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arg1[num];
    let tmp2 = require;
    let tmp3 = dependencyMap;
    let tmp4 = require(704) /* baseGet */(arg0, tmp);
    if (arg2(tmp4, tmp)) {
      let tmp5 = require;
      let tmp6 = dependencyMap;
      let tmp7 = require(4296) /* baseSet */;
      let tmp7Result = tmp7(obj, require(705) /* castPath */(tmp, arg0), tmp4);
    }
  }
  return obj;
};

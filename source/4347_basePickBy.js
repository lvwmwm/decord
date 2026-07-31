// Module ID: 4347
// Function ID: 4348
// Name: basePickBy
// Dependencies: [727, 4348, 728]

// Module 4347 (basePickBy)

export default function basePickBy(arg0, arg1, arg2) {
  const obj = {};
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arg1[num];
    let tmp2 = require;
    let tmp3 = dependencyMap;
    let tmp4 = require(727) /* baseGet */(arg0, tmp);
    let tmp5 = num;
    if (arg2(tmp4, tmp)) {
      let tmp2Result = tmp2(4348);
      let tmp2ResultResult = tmp2Result(obj, tmp2(728)(tmp, arg0), tmp4);
    }
  }
  return obj;
};

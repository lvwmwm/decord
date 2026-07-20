// Module ID: 7460
// Function ID: 59925
// Name: isIterateeCall
// Dependencies: []

// Module 7460 (isIterateeCall)

export default function isIterateeCall(arg0, arg1, arg2) {
  if (require(dependencyMap[0])(arg2)) {
    if ("number" === typeof arg1) {
      let tmp5 = require(dependencyMap[1])(arg2);
      if (tmp5) {
        tmp5 = require(dependencyMap[2])(arg1, arg2.length);
      }
      let tmp2 = tmp5;
    } else {
      tmp2 = "string" === tmp && arg1 in arg2;
    }
    let tmp9 = !tmp8;
    if (!!tmp2) {
      tmp9 = require(dependencyMap[3])(arg2[arg1], arg0);
    }
    return tmp9;
  } else {
    return false;
  }
};

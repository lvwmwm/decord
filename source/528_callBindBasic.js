// Module ID: 528
// Function ID: 6637
// Name: callBindBasic
// Dependencies: []

// Module 528 (callBindBasic)

export default function callBindBasic(arg0) {
  if (arg0.length >= 1) {
    if ("function" === typeof arg0[0]) {
      const tmp3 = require(dependencyMap[1]);
      return tmp3(require(dependencyMap[2]), require(dependencyMap[3]), arg0);
    }
  }
  let tmp5 = require(dependencyMap[0]);
  tmp5 = new tmp5("a function is required");
  throw tmp5;
};

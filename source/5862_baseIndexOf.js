// Module ID: 5862
// Function ID: 51691
// Name: baseIndexOf
// Dependencies: [5863, 4214, 5864]

// Module 5862 (baseIndexOf)

export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = require(5863) /* strictIndexOf */(arg0, arg1, arg2);
  } else {
    tmp3Result = require(4214) /* baseFindIndex */(arg0, require(5864) /* baseIsNaN */, arg2);
    const tmp3 = require(4214) /* baseFindIndex */;
  }
  return tmp3Result;
};

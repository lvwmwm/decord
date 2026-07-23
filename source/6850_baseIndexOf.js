// Module ID: 6850
// Function ID: 54137
// Name: baseIndexOf
// Dependencies: [6851, 4213, 6852]

// Module 6850 (baseIndexOf)

export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = require(6851) /* strictIndexOf */(arg0, arg1, arg2);
  } else {
    tmp3Result = require(4213) /* baseFindIndex */(arg0, require(6852) /* baseIsNaN */, arg2);
    const tmp3 = require(4213) /* baseFindIndex */;
  }
  return tmp3Result;
};

// Module ID: 6849
// Function ID: 54146
// Name: baseIndexOf
// Dependencies: [6850, 4213, 6851]

// Module 6849 (baseIndexOf)

export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = require(6850) /* strictIndexOf */(arg0, arg1, arg2);
  } else {
    tmp3Result = require(4213) /* baseFindIndex */(arg0, require(6851) /* baseIsNaN */, arg2);
    const tmp3 = require(4213) /* baseFindIndex */;
  }
  return tmp3Result;
};

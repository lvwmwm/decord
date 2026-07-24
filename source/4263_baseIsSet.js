// Module ID: 4263
// Function ID: 37371
// Name: baseIsSet
// Dependencies: [577, 747]

// Module 4263 (baseIsSet)

export default function baseIsSet(arg0) {
  let tmp = require(577) /* isObjectLike */(arg0);
  if (tmp) {
    tmp = "[object Set]" == require(747) /* getTag */(arg0);
  }
  return tmp;
};

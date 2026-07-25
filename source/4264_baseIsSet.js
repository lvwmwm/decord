// Module ID: 4264
// Function ID: 37382
// Name: baseIsSet
// Dependencies: [577, 747]

// Module 4264 (baseIsSet)

export default function baseIsSet(arg0) {
  let tmp = require(577) /* isObjectLike */(arg0);
  if (tmp) {
    tmp = "[object Set]" == require(747) /* getTag */(arg0);
  }
  return tmp;
};

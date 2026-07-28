// Module ID: 4298
// Function ID: 37495
// Name: baseIsSet
// Dependencies: [577, 747]

// Module 4298 (baseIsSet)

export default function baseIsSet(arg0) {
  let tmp = require(577) /* isObjectLike */(arg0);
  if (tmp) {
    tmp = "[object Set]" == require(747) /* getTag */(arg0);
  }
  return tmp;
};

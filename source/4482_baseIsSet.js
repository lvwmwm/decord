// Module ID: 4482
// Function ID: 4483
// Name: baseIsSet
// Dependencies: [620, 770]

// Module 4482 (baseIsSet)

export default function baseIsSet(arg0) {
  let tmp3 = require(620) /* isObjectLike */(arg0);
  if (tmp3) {
    tmp3 = "[object Set]" == require(770)(arg0);
  }
  return tmp3;
};

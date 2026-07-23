// Module ID: 604
// Function ID: 7038
// Name: baseIsArguments
// Dependencies: [577, 578]

// Module 604 (baseIsArguments)

export default function baseIsArguments(arg0) {
  let tmp = require(577) /* isObjectLike */(arg0);
  if (tmp) {
    tmp = "[object Arguments]" == require(578) /* getTag */(arg0);
  }
  return tmp;
};

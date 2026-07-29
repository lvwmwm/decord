// Module ID: 619
// Function ID: 620
// Name: baseIsArguments
// Dependencies: [620, 607]

// Module 619 (baseIsArguments)

export default function baseIsArguments(arg0) {
  let tmp3 = require(620) /* isObjectLike */(arg0);
  if (tmp3) {
    tmp3 = "[object Arguments]" == require(607) /* toStringTag */(arg0);
  }
  return tmp3;
};

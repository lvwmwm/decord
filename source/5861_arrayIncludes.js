// Module ID: 5861
// Function ID: 51690
// Name: arrayIncludes
// Dependencies: [5862]

// Module 5861 (arrayIncludes)

export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp2 = !tmp;
  if (!!num) {
    tmp2 = require(5862) /* baseIndexOf */(arg0, arg1, 0) > -1;
  }
  return tmp2;
};

// Module ID: 7115
// Function ID: 7116
// Name: arrayIncludes
// Dependencies: [7116]

// Module 7115 (arrayIncludes)

export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp = num;
  if (tmp) {
    tmp = require(7116) /* baseIndexOf */(arg0, arg1, 0) > -1;
  }
  return tmp;
};

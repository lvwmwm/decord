// Module ID: 7121
// Function ID: 7122
// Name: arrayIncludes
// Dependencies: [7122]

// Module 7121 (arrayIncludes)

export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp = num;
  if (tmp) {
    tmp = require(7122) /* baseIndexOf */(arg0, arg1, 0) > -1;
  }
  return tmp;
};

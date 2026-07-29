// Module ID: 5889
// Function ID: 5890
// Name: arrayIncludes
// Dependencies: [5890]

// Module 5889 (arrayIncludes)

export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp = num;
  if (tmp) {
    tmp = require(5890) /* baseIndexOf */(arg0, arg1, 0) > -1;
  }
  return tmp;
};

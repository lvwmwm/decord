// Module ID: 5887
// Function ID: 5888
// Name: arrayIncludes
// Dependencies: [5888]

// Module 5887 (arrayIncludes)

export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp = num;
  if (tmp) {
    tmp = require(5888) /* baseIndexOf */(arg0, arg1, 0) > -1;
  }
  return tmp;
};

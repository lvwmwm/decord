// Module ID: 7076
// Function ID: 7077
// Name: arrayIncludes
// Dependencies: [7077]

// Module 7076 (arrayIncludes)

export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp = num;
  if (tmp) {
    tmp = require(7077) /* baseIndexOf */(arg0, arg1, 0) > -1;
  }
  return tmp;
};

// Module ID: 7013
// Function ID: 7014
// Name: arrayIncludes
// Dependencies: [7014]

// Module 7013 (arrayIncludes)

export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp = num;
  if (tmp) {
    tmp = require(7014) /* baseIndexOf */(arg0, arg1, 0) > -1;
  }
  return tmp;
};

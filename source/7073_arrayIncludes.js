// Module ID: 7073
// Function ID: 7074
// Name: arrayIncludes
// Dependencies: [7074]

// Module 7073 (arrayIncludes)

export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp = num;
  if (tmp) {
    tmp = require(7074) /* baseIndexOf */(arg0, arg1, 0) > -1;
  }
  return tmp;
};

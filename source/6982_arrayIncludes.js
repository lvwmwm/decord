// Module ID: 6982
// Function ID: 6983
// Name: arrayIncludes
// Dependencies: [6983]

// Module 6982 (arrayIncludes)

export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp = num;
  if (tmp) {
    tmp = require(6983) /* baseIndexOf */(arg0, arg1, 0) > -1;
  }
  return tmp;
};

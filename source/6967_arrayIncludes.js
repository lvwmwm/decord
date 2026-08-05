// Module ID: 6967
// Function ID: 6968
// Name: arrayIncludes
// Dependencies: [6968]

// Module 6967 (arrayIncludes)

export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp = num;
  if (tmp) {
    tmp = require(6968) /* baseIndexOf */(arg0, arg1, 0) > -1;
  }
  return tmp;
};

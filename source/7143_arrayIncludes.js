// Module ID: 7143
// Function ID: 7144
// Name: arrayIncludes
// Dependencies: [7144]

// Module 7143 (arrayIncludes)

export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp = num;
  if (tmp) {
    tmp = require(7144) /* baseIndexOf */(arg0, arg1, 0) > -1;
  }
  return tmp;
};

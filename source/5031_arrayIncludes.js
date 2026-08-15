// Module ID: 5031
// Function ID: 5032
// Name: arrayIncludes
// Dependencies: [5032]

// Module 5031 (arrayIncludes)

export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp = num;
  if (tmp) {
    tmp = require(5032) /* baseIndexOf */(arg0, arg1, 0) > -1;
  }
  return tmp;
};

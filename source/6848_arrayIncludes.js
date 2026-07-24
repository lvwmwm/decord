// Module ID: 6848
// Function ID: 54144
// Name: arrayIncludes
// Dependencies: [6849]

// Module 6848 (arrayIncludes)

export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp2 = !tmp;
  if (!!num) {
    tmp2 = require(6849) /* baseIndexOf */(arg0, arg1, 0) > -1;
  }
  return tmp2;
};

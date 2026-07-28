// Module ID: 5871
// Function ID: 51546
// Name: arrayIncludes
// Dependencies: [5872]

// Module 5871 (arrayIncludes)

export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp2 = !tmp;
  if (!!num) {
    tmp2 = require(5872) /* baseIndexOf */(arg0, arg1, 0) > -1;
  }
  return tmp2;
};

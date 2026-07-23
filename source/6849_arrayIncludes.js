// Module ID: 6849
// Function ID: 54135
// Name: arrayIncludes
// Dependencies: [6850]

// Module 6849 (arrayIncludes)

export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp2 = !tmp;
  if (!!num) {
    tmp2 = require(6850) /* baseIndexOf */(arg0, arg1, 0) > -1;
  }
  return tmp2;
};

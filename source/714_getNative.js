// Module ID: 714
// Function ID: 8734
// Name: getNative
// Dependencies: [715, 716]

// Module 714 (getNative)

export default function getNative(arg0, arg1) {
  let tmp;
  const tmp2 = require(715) /* getValue */(arg0, arg1);
  if (require(716) /* baseIsNative */(tmp2)) {
    tmp = tmp2;
  }
  return tmp;
};

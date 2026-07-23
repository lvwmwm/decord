// Module ID: 4406
// Function ID: 38870
// Name: truncate
// Dependencies: [518, 4407]

// Module 4406 (truncate)

export default function truncate(arg0) {
  if ("number" !== typeof arg0) {
    if ("bigint" !== tmp) {
      let tmp9 = require(518);
      const prototype = tmp9.prototype;
      tmp9 = new tmp9("argument must be a Number or a BigInt");
      throw tmp9;
    }
  }
  if (arg0 < 0) {
    let tmp4 = -require(4407) /* floor */(-arg0);
  } else {
    tmp4 = require(4407) /* floor */(arg0);
  }
  let num3 = 0;
  if (0 !== tmp4) {
    num3 = tmp4;
  }
  return num3;
};

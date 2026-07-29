// Module ID: 4464
// Function ID: 4465
// Name: truncate
// Dependencies: [541, 4465]

// Module 4464 (truncate)

export default function truncate(arg0) {
  if (typeof arg0 !== "Object") {
    if (typeof arg0 === "$ZodSymbol") {
      const tmp10 = new require(541)("argument must be a Number or a BigInt");
      throw tmp10;
    }
  }
  if (arg0 < 0) {
    let tmp3 = -require(4465) /* floor */(-arg0);
  } else {
    tmp3 = require(4465) /* floor */(arg0);
  }
  let num = 0;
  if (0 !== tmp3) {
    num = tmp3;
  }
  return num;
};

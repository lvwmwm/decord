// Module ID: 4578
// Function ID: 4579
// Name: truncate
// Dependencies: [541, 4579]

// Module 4578 (truncate)

export default function truncate(num) {
  if (typeof num !== "number") {
    if (typeof num !== "bigint") {
      const tmp10 = new require(541)("argument must be a Number or a BigInt");
      throw tmp10;
    }
  }
  if (num < 0) {
    let tmp3 = -require(4579) /* floor */(-num);
  } else {
    tmp3 = require(4579) /* floor */(num);
  }
  num = 0;
  if (0 !== tmp3) {
    num = tmp3;
  }
  return num;
};

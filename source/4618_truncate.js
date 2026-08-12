// Module ID: 4618
// Function ID: 4619
// Name: truncate
// Dependencies: [541, 4619]

// Module 4618 (truncate)

export default function truncate(num) {
  if (typeof num !== "number") {
    if (typeof num !== "bigint") {
      const tmp10 = new require(541)("argument must be a Number or a BigInt");
      throw tmp10;
    }
  }
  if (num < 0) {
    let tmp3 = -require(4619) /* floor */(-num);
  } else {
    tmp3 = require(4619) /* floor */(num);
  }
  num = 0;
  if (0 !== tmp3) {
    num = tmp3;
  }
  return num;
};

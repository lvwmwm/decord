// Module ID: 6486
// Function ID: 6487
// Name: truncate
// Dependencies: [1294, 6487]

// Module 6486 (truncate)
import _mod1294 from "module_1294" /* 1294 */;
import floor from "floor" /* 6487 */;


export default function truncate(num) {
  let tmp3;
  if (typeof num !== "number") {
    if (typeof num !== "bigint") {
      const self = this;
      const self2 = this;
      const tmp8 = new _mod1294("argument must be a Number or a BigInt");
      throw tmp8;
    }
  }
  if (num < 0) {
    tmp3 = -floor(-num);
  } else {
    tmp3 = floor(num);
  }
  num = 0;
  if (0 !== tmp3) {
    num = tmp3;
  }
  return num;
};

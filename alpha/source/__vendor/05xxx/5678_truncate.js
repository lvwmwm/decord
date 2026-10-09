// Module ID: 5678
// Function ID: 5679
// Name: truncate
// Dependencies: [1306, 5679]

// Module 5678 (truncate)
import _mod1306 from "module_1306" /* 1306 */;
import floor from "floor" /* 5679 */;


export default function truncate(num) {
  let tmp3;
  if (typeof num !== "number") {
    if (typeof num !== "bigint") {
      const self = this;
      const self2 = this;
      const tmp8 = new _mod1306("argument must be a Number or a BigInt");
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

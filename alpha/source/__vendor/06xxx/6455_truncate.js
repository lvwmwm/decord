// Module ID: 6455
// Function ID: 6456
// Name: truncate
// Dependencies: [1305, 6456]

// Module 6455 (truncate)
import _mod1305 from "module_1305" /* 1305 */;
import floor from "floor" /* 6456 */;


export default function truncate(num) {
  let tmp3;
  if (typeof num !== "number") {
    if (typeof num !== "bigint") {
      const self = this;
      const self2 = this;
      const tmp8 = new _mod1305("argument must be a Number or a BigInt");
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

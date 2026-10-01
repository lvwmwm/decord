// Module ID: 5129
// Function ID: 5130
// Name: truncate
// Dependencies: [1282, 5130]

// Module 5129 (truncate)
import _mod1282 from "module_1282" /* 1282 */;
import floor from "floor" /* 5130 */;


export default function truncate(num) {
  let tmp3;
  if (typeof num !== "number") {
    if (typeof num !== "bigint") {
      const self = this;
      const self2 = this;
      const tmp8 = new _mod1282("argument must be a Number or a BigInt");
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

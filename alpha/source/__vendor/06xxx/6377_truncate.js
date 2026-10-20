// Module ID: 6377
// Function ID: 6378
// Name: truncate
// Dependencies: [1308, 6378]

// Module 6377 (truncate)
import _mod1308 from "module_1308" /* 1308 */;
import floor from "floor" /* 6378 */;


export default function truncate(num) {
  let tmp3;
  if (typeof num !== "number") {
    if (typeof num !== "bigint") {
      const self = this;
      const self2 = this;
      const tmp8 = new _mod1308("argument must be a Number or a BigInt");
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

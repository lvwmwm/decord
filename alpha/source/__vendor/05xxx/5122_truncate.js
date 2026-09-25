// Module ID: 5122
// Function ID: 5123
// Name: truncate
// Dependencies: [1282, 5123]

// Module 5122 (truncate)
import _mod1282 from "module_1282" /* 1282 */;
import floor from "floor" /* 5123 */;


export default function truncate(num) {
  if (typeof num !== "number") {
    if (typeof num !== "bigint") {
      const tmp10 = new _mod1282("argument must be a Number or a BigInt");
      throw tmp10;
    }
  }
  if (num < 0) {
    let tmp3 = -floor(-num);
  } else {
    tmp3 = floor(num);
  }
  num = 0;
  if (0 !== tmp3) {
    num = tmp3;
  }
  return num;
};

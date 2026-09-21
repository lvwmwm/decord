// Module ID: 5036
// Function ID: 5037
// Name: truncate
// Dependencies: [1286, 5037]

// Module 5036 (truncate)
import _mod1286 from "module_1286" /* 1286 */;
import floor from "floor" /* 5037 */;


export default function truncate(num) {
  if (typeof num !== "number") {
    if (typeof num !== "bigint") {
      const tmp10 = new _mod1286("argument must be a Number or a BigInt");
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

// Module ID: 4680
// Function ID: 4681
// Name: truncate
// Dependencies: [541, 4681]

// Module 4680 (truncate)
import _mod541 from "module_541" /* 541 */;
import floor from "floor" /* 4681 */;


export default function truncate(num) {
  if (typeof num !== "number") {
    if (typeof num !== "bigint") {
      const tmp10 = new _mod541("argument must be a Number or a BigInt");
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

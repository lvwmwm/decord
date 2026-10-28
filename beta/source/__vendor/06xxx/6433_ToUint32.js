// Module ID: 6433
// Function ID: 6434
// Name: ToUint32
// Dependencies: [6434, 6451, 6452, 6454]

// Module 6433 (ToUint32)
import ToNumber from "ToNumber" /* 6434 */;
import isFinite from "isFinite" /* 6451 */;
import truncate from "truncate" /* 6452 */;
import modulo from "modulo" /* 6454 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (isFinite(tmp3)) {
    if (0 !== tmp3) {
      const tmp4 = truncate(tmp3);
      const tmp5 = modulo(tmp4, 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};

// Module ID: 5662
// Function ID: 5663
// Name: ToUint32
// Dependencies: [5663, 5680, 5681, 5683]

// Module 5662 (ToUint32)
import ToNumber from "ToNumber" /* 5663 */;
import isFinite from "isFinite" /* 5680 */;
import truncate from "truncate" /* 5681 */;
import modulo from "modulo" /* 5683 */;


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

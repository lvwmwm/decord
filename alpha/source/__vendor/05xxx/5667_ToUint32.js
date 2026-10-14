// Module ID: 5667
// Function ID: 5668
// Name: ToUint32
// Dependencies: [5668, 5685, 5686, 5688]

// Module 5667 (ToUint32)
import ToNumber from "ToNumber" /* 5668 */;
import isFinite from "isFinite" /* 5685 */;
import truncate from "truncate" /* 5686 */;
import modulo from "modulo" /* 5688 */;


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

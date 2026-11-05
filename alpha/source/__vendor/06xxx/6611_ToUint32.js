// Module ID: 6611
// Function ID: 6612
// Name: ToUint32
// Dependencies: [6612, 6629, 6630, 6632]

// Module 6611 (ToUint32)
import ToNumber from "ToNumber" /* 6612 */;
import isFinite from "isFinite" /* 6629 */;
import truncate from "truncate" /* 6630 */;
import modulo from "modulo" /* 6632 */;


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

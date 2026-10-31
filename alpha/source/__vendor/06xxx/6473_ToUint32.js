// Module ID: 6473
// Function ID: 6474
// Name: ToUint32
// Dependencies: [6474, 6491, 6492, 6494]

// Module 6473 (ToUint32)
import ToNumber from "ToNumber" /* 6474 */;
import isFinite from "isFinite" /* 6491 */;
import truncate from "truncate" /* 6492 */;
import modulo from "modulo" /* 6494 */;


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

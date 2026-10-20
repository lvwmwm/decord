// Module ID: 6358
// Function ID: 6359
// Name: ToUint32
// Dependencies: [6359, 6376, 6377, 6379]

// Module 6358 (ToUint32)
import ToNumber from "ToNumber" /* 6359 */;
import isFinite from "isFinite" /* 6376 */;
import truncate from "truncate" /* 6377 */;
import modulo from "modulo" /* 6379 */;


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

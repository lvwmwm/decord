// Module ID: 5110
// Function ID: 5111
// Name: ToUint32
// Dependencies: [5111, 5128, 5129, 5131]

// Module 5110 (ToUint32)
import ToNumber from "ToNumber" /* 5111 */;
import isFinite from "isFinite" /* 5128 */;
import truncate from "truncate" /* 5129 */;
import modulo from "modulo" /* 5131 */;


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

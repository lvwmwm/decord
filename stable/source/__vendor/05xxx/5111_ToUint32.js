// Module ID: 5111
// Function ID: 5112
// Name: ToUint32
// Dependencies: [5112, 5129, 5130, 5132]

// Module 5111 (ToUint32)
import ToNumber from "ToNumber" /* 5112 */;
import isFinite from "isFinite" /* 5129 */;
import truncate from "truncate" /* 5130 */;
import modulo from "modulo" /* 5132 */;


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

// Module ID: 6402
// Function ID: 6403
// Name: ToUint32
// Dependencies: [6403, 6420, 6421, 6423]

// Module 6402 (ToUint32)
import ToNumber from "ToNumber" /* 6403 */;
import isFinite from "isFinite" /* 6420 */;
import truncate from "truncate" /* 6421 */;
import modulo from "modulo" /* 6423 */;


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

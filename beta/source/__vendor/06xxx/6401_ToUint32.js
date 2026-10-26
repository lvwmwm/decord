// Module ID: 6401
// Function ID: 6402
// Name: ToUint32
// Dependencies: [6402, 6419, 6420, 6422]

// Module 6401 (ToUint32)
import ToNumber from "ToNumber" /* 6402 */;
import isFinite from "isFinite" /* 6419 */;
import truncate from "truncate" /* 6420 */;
import modulo from "modulo" /* 6422 */;


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

// Module ID: 6436
// Function ID: 6437
// Name: ToUint32
// Dependencies: [6437, 6454, 6455, 6457]

// Module 6436 (ToUint32)
import ToNumber from "ToNumber" /* 6437 */;
import isFinite from "isFinite" /* 6454 */;
import truncate from "truncate" /* 6455 */;
import modulo from "modulo" /* 6457 */;


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

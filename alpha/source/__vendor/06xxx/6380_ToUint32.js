// Module ID: 6380
// Function ID: 6381
// Name: ToUint32
// Dependencies: [6381, 6398, 6399, 6401]

// Module 6380 (ToUint32)
import ToNumber from "ToNumber" /* 6381 */;
import isFinite from "isFinite" /* 6398 */;
import truncate from "truncate" /* 6399 */;
import modulo from "modulo" /* 6401 */;


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

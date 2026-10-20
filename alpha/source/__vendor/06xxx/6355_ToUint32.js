// Module ID: 6355
// Function ID: 6356
// Name: ToUint32
// Dependencies: [6356, 6373, 6374, 6376]

// Module 6355 (ToUint32)
import ToNumber from "ToNumber" /* 6356 */;
import isFinite from "isFinite" /* 6373 */;
import truncate from "truncate" /* 6374 */;
import modulo from "modulo" /* 6376 */;


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

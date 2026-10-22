// Module ID: 6387
// Function ID: 6388
// Name: ToUint32
// Dependencies: [6388, 6405, 6406, 6408]

// Module 6387 (ToUint32)
import ToNumber from "ToNumber" /* 6388 */;
import isFinite from "isFinite" /* 6405 */;
import truncate from "truncate" /* 6406 */;
import modulo from "modulo" /* 6408 */;


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

// Module ID: 6386
// Function ID: 6387
// Name: ToUint32
// Dependencies: [6387, 6404, 6405, 6407]

// Module 6386 (ToUint32)
import ToNumber from "ToNumber" /* 6387 */;
import isFinite from "isFinite" /* 6404 */;
import truncate from "truncate" /* 6405 */;
import modulo from "modulo" /* 6407 */;


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

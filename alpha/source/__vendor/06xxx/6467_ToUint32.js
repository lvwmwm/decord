// Module ID: 6467
// Function ID: 6468
// Name: ToUint32
// Dependencies: [6468, 6485, 6486, 6488]

// Module 6467 (ToUint32)
import ToNumber from "ToNumber" /* 6468 */;
import isFinite from "isFinite" /* 6485 */;
import truncate from "truncate" /* 6486 */;
import modulo from "modulo" /* 6488 */;


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

// Module ID: 5659
// Function ID: 5660
// Name: ToUint32
// Dependencies: [5660, 5677, 5678, 5680]

// Module 5659 (ToUint32)
import ToNumber from "ToNumber" /* 5660 */;
import isFinite from "isFinite" /* 5677 */;
import truncate from "truncate" /* 5678 */;
import modulo from "modulo" /* 5680 */;


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

// Module ID: 5880
// Function ID: 5881
// Name: ToUint32
// Dependencies: [5881, 5898, 5899, 5901]

// Module 5880 (ToUint32)
import ToNumber from "ToNumber" /* 5881 */;
import isFinite from "isFinite" /* 5898 */;
import truncate from "truncate" /* 5899 */;
import modulo from "modulo" /* 5901 */;


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

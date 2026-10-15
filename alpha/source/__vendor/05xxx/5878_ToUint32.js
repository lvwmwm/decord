// Module ID: 5878
// Function ID: 5879
// Name: ToUint32
// Dependencies: [5879, 5896, 5897, 5899]

// Module 5878 (ToUint32)
import ToNumber from "ToNumber" /* 5879 */;
import isFinite from "isFinite" /* 5896 */;
import truncate from "truncate" /* 5897 */;
import modulo from "modulo" /* 5899 */;


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

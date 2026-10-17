// Module ID: 5918
// Function ID: 5919
// Name: ToUint32
// Dependencies: [5919, 5936, 5937, 5939]

// Module 5918 (ToUint32)
import ToNumber from "ToNumber" /* 5919 */;
import isFinite from "isFinite" /* 5936 */;
import truncate from "truncate" /* 5937 */;
import modulo from "modulo" /* 5939 */;


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

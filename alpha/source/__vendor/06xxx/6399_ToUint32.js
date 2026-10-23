// Module ID: 6399
// Function ID: 6400
// Name: ToUint32
// Dependencies: [6400, 6417, 6418, 6420]

// Module 6399 (ToUint32)
import ToNumber from "ToNumber" /* 6400 */;
import isFinite from "isFinite" /* 6417 */;
import truncate from "truncate" /* 6418 */;
import modulo from "modulo" /* 6420 */;


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

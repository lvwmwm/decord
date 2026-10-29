// Module ID: 6460
// Function ID: 6461
// Name: ToUint32
// Dependencies: [6461, 6478, 6479, 6481]

// Module 6460 (ToUint32)
import ToNumber from "ToNumber" /* 6461 */;
import isFinite from "isFinite" /* 6478 */;
import truncate from "truncate" /* 6479 */;
import modulo from "modulo" /* 6481 */;


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

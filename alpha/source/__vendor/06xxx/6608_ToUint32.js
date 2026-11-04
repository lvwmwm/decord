// Module ID: 6608
// Function ID: 6609
// Name: ToUint32
// Dependencies: [6609, 6626, 6627, 6629]

// Module 6608 (ToUint32)
import ToNumber from "ToNumber" /* 6609 */;
import isFinite from "isFinite" /* 6626 */;
import truncate from "truncate" /* 6627 */;
import modulo from "modulo" /* 6629 */;


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

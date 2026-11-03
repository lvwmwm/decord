// Module ID: 6593
// Function ID: 6594
// Name: ToUint32
// Dependencies: [6594, 6611, 6612, 6614]

// Module 6593 (ToUint32)
import ToNumber from "ToNumber" /* 6594 */;
import isFinite from "isFinite" /* 6611 */;
import truncate from "truncate" /* 6612 */;
import modulo from "modulo" /* 6614 */;


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

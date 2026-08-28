// Module ID: 4739
// Function ID: 4740
// Name: ToUint32
// Dependencies: [4740, 4757, 4758, 4760]

// Module 4739 (ToUint32)
import ToNumber from "ToNumber" /* 4740 */;
import isFinite from "isFinite" /* 4757 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (isFinite(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4760)(tmp(4758)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};

// Module ID: 4741
// Function ID: 4742
// Name: ToUint32
// Dependencies: [4742, 4759, 4760, 4762]

// Module 4741 (ToUint32)
import ToNumber from "ToNumber" /* 4742 */;
import isFinite from "isFinite" /* 4759 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (isFinite(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4762)(tmp(4760)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
